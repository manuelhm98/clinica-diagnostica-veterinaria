/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import Details from "./Details";
import { putPatient, showImage, uploadPetPhoto } from "../../services/patients";
import SelectImage from "./Form/SelectImage";
import { Warning } from "../Global/Alerts/Warning";
import { Success } from "../Global/Alerts/Success";
import SearchCustomer from "./Form/SearchCustomer";
import { useDispatch, useSelector } from "react-redux";
import { addPatient } from "../../redux/actions/patiences";
import Form from "./Form/Form";
import { listColor } from "../../redux/actions/colors";
import { listBreed } from "../../redux/actions/breeds";
import { readPatTypes } from "../../redux/actions/pat-type";
import { listSpecies } from "../../redux/actions/species";
import { readSexes } from "../../redux/actions/sexes";
import { checkRole } from "../../utils/checkRole";

export default function TableBody({ patients, setReload, user }) {
  //redux dispatch
  const dispatch = useDispatch();
  const alldispatch = () => {
    dispatch(listColor());
    dispatch(listBreed());
    dispatch(readPatTypes());
    dispatch(listSpecies());
    dispatch(readSexes());
  };
  //redux use effect
  useEffect(() => {
    return alldispatch();
  }, []);
  //redux select states
  const breeds = useSelector((state) => state.breed.data);
  const colors = useSelector((state) => state.color.data);
  const patTypes = useSelector((state) => state.patType.data);
  const species = useSelector((state) => state.specie.data);
  const sexes = useSelector((state) => state.sex.data);
  //react states logic
  const [showDetails, setShowDetails] = useState(false);
  const [showModalEditPhoto, setShowModalEditPhoto] = useState(false);
  const [showModalEditCustom, setShowModalEditCustom] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [details, setDetails] = useState();
  const [petProfile, setPetProfile] = useState();
  const [clientToPet, setClientToPet] = useState();
  const [patient, setPatient] = useState();

  //view pet detail modal
  const setPetDetails = (pet) => {
    setDetails(pet);
    setShowDetails(true);
  };

  //change customer
  const setPetCustomer = (pet) => {
    setPatient(pet);
    setShowModalEditCustom(true);
  };

  //change profile pic
  const profilePic = (pet) => {
    setPatient(pet);
    setShowModalEditPhoto(true);
  };

  const setEditMethod = (pet) => {
    setPatient(pet);
    setShowEditModal(true);
  };

  //method change customer
  const editPet = () => {
    if (clientToPet) {
      const newPatient = { ...patient, customersId: clientToPet?.id };
      putPatient(patient?.id, newPatient).then(() => {
        setShowModalEditCustom(false);
        setReload(true);
        Success("Se actualizo el dueño de la mascota");
        dispatch(addPatient(patient));
      });
      return;
    }
    Warning("Debes seleccionar el nuevo dueño");
  };

  //method change profile pic
  const addPhoto = () => {
    if (petProfile) {
      uploadPetPhoto(patient?.id, petProfile).then(() => {
        setShowModalEditPhoto(false);
        setReload(true);
        Success("Se agrego la imagen con exito!");
        dispatch(addPatient(patient));
      });
      return;
    }
    Warning("Debes seleccionar una imagen");
  };
  return (
    <>
      {patients.patients?.length >= 1 ? (
        patients.patients?.map((pat) => (
          <tr key={pat.id}>
            <TD onclick={() => setPetDetails(pat)}>
              <span className="text-red-500 font-semibold">{pat.exp}</span>
            </TD>
            <TD onclick={() => setPetDetails(pat)} name={pat.names} />
            <TD onclick={() => setPetCustomer(pat)}>
              <span className="text-gray-600 text-xs uppercase whitespace-nowrap">
                {pat.customers?.names} {pat.customers?.lastname}
              </span>
            </TD>
            <TD onclick={() => profilePic(pat)}>
              <div className=" w-20">
                <img
                  src={showImage(pat.img)}
                  alt="null"
                  className="w-full rounded"
                />
              </div>
            </TD>
            <TD>
              <div className="flex">
                <div className="relative mt-1 ml-3 inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    nameName="toggle"
                    id="toggle"
                    defaultChecked={pat.state}
                    readOnly
                    disabled
                    className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label
                    htmlFor="toggle"
                    className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
                <span className="text-xs mt-1 font-normal">
                  {pat.state ? "Activo" : "Inactivo"}
                </span>
              </div>
            </TD>
            {checkRole(user) === 1 && (
              <TD>
                <div className="flex">
                  <button
                    onClick={() => setEditMethod(pat)}
                    className="bg-green-500 text-white text-xs px-6 m-1 py-1 rounded"
                  >
                    Editar
                  </button>
                </div>
              </TD>
            )}
          </tr>
        ))
      ) : (
        <tr>
          <td>
            <p className="p-4">No hay registros para mostrar</p>
          </td>
        </tr>
      )}
      <Modal
        title="Editar paciente"
        setShowModal={setShowEditModal}
        showModal={showEditModal}
      >
        <Form
          setShowEditModal={setShowEditModal}
          setReload={setReload}
          sexes={sexes}
          species={species}
          patient={patient}
          breeds={breeds}
          colors={colors}
          patTypes={patTypes}
        />
      </Modal>
      <Modal
        title="Agregar foto al paciente"
        showModal={showModalEditPhoto}
        setShowModal={setShowModalEditPhoto}
      >
        <div className="m-10">
          <SelectImage patient={patient} setPetfile={setPetProfile} />
          <button
            onClick={addPhoto}
            className="bg-blue-500 text-white w-full mt-2 rounded"
          >
            Guardar
          </button>
        </div>
      </Modal>
      <Modal
        title="Selecciona el nuevo dueño"
        setShowModal={setShowModalEditCustom}
        showModal={showModalEditCustom}
      >
        <SearchCustomer
          setClientToPet={setClientToPet}
          clientToPet={clientToPet}
          isAdded={false}
        />
        <button
          onClick={editPet}
          className="bg-blue-500 text-white w-full mt-2 rounded"
        >
          Guardar
        </button>
      </Modal>
      <Modal
        title="Detalles del paciente"
        showModal={showDetails}
        setShowModal={setShowDetails}
      >
        <Details patient={details} />
      </Modal>
    </>
  );
}
