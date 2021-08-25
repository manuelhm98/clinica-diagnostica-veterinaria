import { useEffect, useState, useRef } from "react";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { listColor } from "../redux/actions/colors";
import { readSexes } from "../redux/actions/sexes";
import { listSpecies } from "../redux/actions/species";
import { listBreed } from "../redux/actions/breeds";
import { readPatTypes } from "../redux/actions/pat-type";
import SelectImage from "../components/Patients/Form/SelectImage";
import { formatAge, getAge, getBirtDay } from "../utils/dates";
import Modal from "../components/Global/Modal";
import SearchCustomer from "../components/Patients/Form/SearchCustomer";
import { useFormik } from "formik";
import * as yup from "yup";
import { Warning } from "../components/Global/Alerts/Warning";
import { Success } from "../components/Global/Alerts/Success";
import { Info } from "../components/Global/Alerts/Info";
import { Error } from "../components/Global/Alerts/Error";
import { addNewPatient, uploadPetPhoto } from "../services/patients";
import { addPatient } from "../redux/actions/patiences";
import { useHistory } from "react-router-dom";

export default function AddPatient() {
  //react states
  const [petProfile, setPetProfile] = useState();
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const [birthDay, setBirthDay] = useState();
  const [newBreeds, setNewBreeds] = useState();
  const [showModal, setShowModal] = useState(false);
  const [clientToPet, setClientToPet] = useState();
  const route = useHistory();
  const inputBirth = useRef(null);
  const inputDays = useRef(null);
  const inputMonths = useRef(null);
  const inputYears = useRef(null);

  //redux states
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.color.data);
  const sexes = useSelector((state) => state.sex.data);
  const species = useSelector((state) => state.specie.data);
  const breeds = useSelector((state) => state.breed.data);
  const patTypes = useSelector((state) => state.patType.data);

  //upload photo profile method
  const addNewPhotoProfile = (patient) => {
    if (petProfile) {
      uploadPetPhoto(patient?.id, petProfile)
        .then(() => {
          Success("Se guardo el registro con exito");
          dispatch(addPatient(patient));
          route.push("/patients");
        })
        .catch(() => {
          Error("Error al intentar guardar el paciente");
        });
      return;
    }
    Info("Se guardo el registro con una foto por defecto");
    route.push("/patients");
  };

  //redux get states
  useEffect(() => {
    dispatch(listColor());
    dispatch(readSexes());
    dispatch(listSpecies());
    dispatch(listBreed());
    dispatch(readPatTypes());
    return;
  }, [dispatch]);

  //formik logic
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: yup.object({
      names: yup.string().required("El nombre del paciente es requerido"),
      patientstypeId: yup
        .number()
        .required("El tipo de paciente es requerido")
        .typeError("Tipo de paciente invalido"),
      colorsId: yup
        .number()
        .required("El color es requerido")
        .typeError("Color invalido"),
      sexesId: yup
        .number()
        .required("El sexo es requerido")
        .typeError("Sexo invalido"),
      breedsId: yup
        .number()
        .required("La raza es requerida")
        .typeError("Raza invalida"),
    }),
    onSubmit: (values) => {
      if (birthDay) {
        if (clientToPet) {
          const newData = {
            ...values,
            birthday: new Date(birthDay),
            age: formatAge(age.years, age.months, age.days),
            customersId: clientToPet?.id,
          };
          addNewPatient(newData).then((res) => {
            if (res.patient) {
              addNewPhotoProfile(res.patient);
              return;
            }
            Error("Ah ocurrido un error inseperado");
          });
          return;
        }
        Warning("Debes seleccionar el dueño del paciente");
        return;
      }
      Warning("Debes seleccionar la fecha de nacimiento");
    },
  });
  //set age to the pet with birthday
  const setAgeToInput = (e) => {
    setAge(getAge(e));
    const r = getAge(e);
    inputDays.current.value = r.days < 30 ? r.days : 0;
    inputMonths.current.value = r.months;
    inputYears.current.value = r.years;
    setBirthDay(e);
  };

  //set birthday to the pet with age
  const setBirthDayToInput = () => {
    inputBirth.current.value = getBirtDay(age.years, age.months, age.days);
    setBirthDay(getBirtDay(age.years, age.months, age.days));
  };

  //set breed with the specie
  const setBreedToInput = (id) => {
    const filterBreeds = breeds.breed.filter(
      (breed) => breed.speciesId === Number(id)
    );
    console.log(filterBreeds);
    setNewBreeds(filterBreeds);
  };
  return (
    <Layout>
      <div className="m-10 shadow border rounded p-11 ">
        <form onSubmit={formik.handleSubmit} className="grid grid-cols-2">
          <div>
            <label className="text-gray-600 text-lg">
              Agregar nuevo paciente
            </label>
            <div className="grid grid-cols-2 mt-3">
              <div className="p-2 flex flex-col">
                <label className="text-gray-700 text-sm">Nombre</label>
                <input
                  placeholder="Escribe el nombre"
                  name="names"
                  onChange={formik.handleChange}
                  className={
                    "border hover:border-green-500 outline-none mt-1 w-full rounded text-gray-700 text-sm px-2 py-1 " +
                    (formik.errors.names && formik.touched.names
                      ? "border-red-400"
                      : "border-gray-300")
                  }
                />
                {formik.errors.names && formik.touched.names && (
                  <span className="text-sm font-normal text-red-400">
                    {formik.errors.names}
                  </span>
                )}
              </div>
              <div className="p-2 flex flex-col">
                <label className="text-gray-700 text-sm">Color</label>
                <select
                  defaultValue={"DEFAULT"}
                  onChange={formik.handleChange}
                  name="colorsId"
                  className={
                    "border hover:border-green-500 outline-none mt-1 w-full rounded text-gray-700 text-sm px-2 py-1 " +
                    (formik.errors.colorsId && formik.touched.colorsId
                      ? "border-red-400"
                      : "border-gray-300")
                  }
                >
                  <option disabled value={"DEFAULT"}>
                    Selecciona el color
                  </option>
                  {colors.color &&
                    colors.color.map((color) => (
                      <option key={color.id} value={color.id}>
                        {color.type}
                      </option>
                    ))}
                </select>
                {formik.errors.colorsId && formik.touched.colorsId && (
                  <span className="text-sm font-normal text-red-400">
                    {formik.errors.colorsId}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 mt-3">
              <div className="p-2 flex flex-col">
                <label className="text-gray-700 text-sm">Especie</label>
                <select
                  defaultValue={"DEFAULT"}
                  className="border hover:border-green-500 outline-none mt-1 w-full rounded text-gray-700 text-sm px-2 py-1"
                  onChange={(e) => setBreedToInput(e.currentTarget.value)}
                >
                  <option disabled value={"DEFAULT"}>
                    Selecciona la especie
                  </option>
                  {species.specie &&
                    species.specie.map((specie) => (
                      <option key={specie.id} value={specie.id}>
                        {specie.type}
                      </option>
                    ))}
                </select>
              </div>
              <div className="p-2 flex flex-col">
                <label className="text-gray-700 text-sm">Raza</label>
                <select
                  defaultValue={"DEFAULT"}
                  onChange={formik.handleChange}
                  name="breedsId"
                  className={
                    "border hover:border-green-500 outline-none mt-1 w-full rounded text-gray-700 text-sm px-2 py-1 " +
                    (formik.errors.breedsId && formik.touched.breedsId
                      ? "border-red-400"
                      : "border-gray-300")
                  }
                >
                  <option disabled value={"DEFAULT"}>
                    Selecciona la raza
                  </option>
                  {newBreeds
                    ? newBreeds?.map((breed) => (
                        <option key={breed.id} value={breed.id}>
                          {breed.type}
                        </option>
                      ))
                    : breeds.breed?.map((breed) => (
                        <option key={breed.id} value={breed.id}>
                          {breed.type}
                        </option>
                      ))}
                </select>
                {formik.errors.breedsId && formik.touched.breedsId && (
                  <span className="text-sm font-normal text-red-400">
                    {formik.errors.breedsId}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 mt-3">
              <div className="p-2 flex flex-col">
                <label className="text-gray-700 text-sm">Sexo</label>
                <select
                  defaultValue={"DEFAULT"}
                  onChange={formik.handleChange}
                  name="sexesId"
                  className={
                    "border hover:border-green-500 outline-none mt-1 w-full rounded text-gray-700 text-sm px-2 py-1 " +
                    (formik.errors.sexesId && formik.touched.sexesId
                      ? "border-red-400"
                      : "border-gray-300")
                  }
                >
                  <option disabled value={"DEFAULT"}>
                    Selecciona el sexo
                  </option>
                  {sexes &&
                    sexes.map((sex) => (
                      <option key={sex.id} value={sex.id}>
                        {sex.type}
                      </option>
                    ))}
                </select>
                {formik.errors.sexesId && formik.touched.sexesId && (
                  <span className="text-sm font-normal text-red-400">
                    {formik.errors.sexesId}
                  </span>
                )}
              </div>
              <div className="p-2 flex flex-col">
                <label className="text-gray-700 text-sm">
                  Tipo de paciente
                </label>
                <select
                  defaultValue={"DEFAULT"}
                  name="patientstypeId"
                  onChange={formik.handleChange}
                  className="border hover:border-green-500 outline-none mt-1 w-full rounded text-gray-700 text-sm px-2 py-1"
                >
                  <option disabled value={"DEFAULT"}>
                    Selecciona el tipo de paciente
                  </option>
                  {patTypes &&
                    patTypes.map((patType) => (
                      <option key={patType.id} value={patType.id}>
                        {patType.type}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="grid mt-3">
              <div className="p-2 flex flex-col">
                <label className="text-gray-700 text-sm">
                  Fecha de nacimiento
                </label>
                <input
                  className="border hover:border-green-500 outline-none mt-1 w-full rounded text-gray-700 text-sm px-2 py-1"
                  type="date"
                  defaultValue={birthDay}
                  onChange={(e) => setAgeToInput(e.currentTarget.value)}
                  ref={inputBirth}
                />
              </div>
            </div>
            <div className="grid mt-3">
              <div className="p-2 flex flex-col">
                <label className="text-gray-700 text-sm">
                  Edad de la mascota
                </label>
                <div className="grid grid-cols-4 gap-3 mt-2">
                  <button
                    type="button"
                    onClick={setBirthDayToInput}
                    className="bg-green-500 text-sm py-1 text-white rounded"
                  >
                    Calcular
                  </button>
                  <input
                    className="border hover:border-green-500 outline-none mt-1 w-full rounded text-gray-700 text-sm px-2 py-1"
                    placeholder="Años"
                    type="text"
                    onChange={(e) =>
                      setAge({ ...age, years: e.currentTarget.value })
                    }
                    defaultValue={age.years > 0 ? age.years : ""}
                    ref={inputYears}
                  />
                  <input
                    className="border hover:border-green-500 outline-none mt-1 w-full rounded text-gray-700 text-sm px-2 py-1"
                    placeholder="Meses"
                    type="text"
                    onChange={(e) =>
                      setAge({ ...age, months: e.currentTarget.value })
                    }
                    defaultValue={age.months > 0 ? age.months : ""}
                    ref={inputMonths}
                  />
                  <input
                    className="border hover:border-green-500 outline-none mt-1 w-full rounded text-gray-700 text-sm px-2 py-1"
                    placeholder="Dias"
                    type="text"
                    onChange={(e) =>
                      setAge({ ...age, days: e.currentTarget.value })
                    }
                    defaultValue={age.days > 0 && age.days < 32 ? age.days : ""}
                    ref={inputDays}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid mt-10">
              <div className="p-2 flex flex-col">
                <label className="text-gray-700 text-sm">
                  Dueño de la mascota
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    placeholder="Nombre del dueño"
                    readOnly
                    disabled
                    defaultValue={clientToPet && clientToPet.names}
                    className="border hover:border-green-500 outline-none mt-1 w-full rounded text-gray-700 text-sm px-2 py-1"
                  />
                  <input
                    placeholder="Apellido del dueño"
                    readOnly
                    disabled
                    defaultValue={clientToPet && clientToPet.lastname}
                    className="border hover:border-green-500 outline-none mt-1 w-full rounded text-gray-700 text-sm px-2 py-1"
                  />
                </div>
                <Modal title="Seleccionar Dueño de la mascota" setShowModal={setShowModal} showModal={showModal}>
                  <SearchCustomer
                    setShowModal={setShowModal}
                    setClientToPet={setClientToPet}
                  />
                </Modal>
                <button
                  onClick={() => setShowModal(true)}
                  type="button"
                  className="bg-green-500 text-white rounded text-sm py-1 mt-3"
                >
                  Seleccionar dueño
                </button>
              </div>
            </div>
            <div className="grid">
              <div className="p-2 flex flex-col">
                <label className="text-gray-700 text-sm">
                  Foto del paciente
                </label>
                <SelectImage setPetfile={setPetProfile} />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded text-sm py-1 mt-3 w-full"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

function initialValues() {
  return {
    names: "",
    patientstypeId: "",
    sexesId: "",
    colorsId: "",
    breedsId: "",
  };
}
