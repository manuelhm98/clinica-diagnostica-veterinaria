import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import File from "../../../assets/file.png";
import { uploadPetPDF } from "../../../services/patients";
import { Success } from "../../Global/Alerts/Success";
import { Warning } from "../../Global/Alerts/Warning";
import { Error } from "../../Global/Alerts/Error";
import { useDispatch } from "react-redux";
import { addPatient } from "../../../redux/actions/patiences";

export default function AddPDF({ patient, setreload, setShowModal }) {
  const [petFile, setPetFile] = useState();
  const [spinner, setSpinner] = useState(false);
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const onDropImage = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    console.log(file);
    setPetFile(file);
    setName(file.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { getRootProps: getRootImgProps, getInputProps: getInputImgProps } =
    useDropzone({
      accept: ".pdf",
      noKeyboard: true,
      multiple: false,
      onDrop: onDropImage,
    });
  const handleAddPDF = () => {
    if (!petFile) {
      Warning("Debes seleccinar un documento");
      return;
    }
    setSpinner(true);
    uploadPetPDF(patient?.id, petFile).then((res) => {
      if (!res.ok) {
        setSpinner(false);
        Error("Ah ocurrido un error inesperado");
        setShowModal(false);
        return;
      }
      setSpinner(false);
      Success("Se guardo el documento");
      setreload(true);
      setShowModal(false);
      dispatch(addPatient(patient));
    });
  };
  return (
    <>
      <div
        {...getRootImgProps()}
        className="flex justify-center shadow rounded p-4 items-center mt-4"
      >
        <img src={File} className="rounded max-h-60 w-40" alt="null" />
      </div>
      <label className="w-full text-xs py-1 mt-3 p-1 flex items-center bg-white rounded-lg tracking-wide  border cursor-pointer">
        <FontAwesomeIcon className="text-gray-600 ml-2" icon={faFolder} />
        <span className="text-gray-500 leading-normal ml-4 ">
          Seleccionar un documento
        </span>
        <input
          {...getInputImgProps()}
          type="file"
          accept="application/pdf"
          className="hidden"
        />
      </label>
      {name && <p>{name}</p>}
      <button
        onClick={handleAddPDF}
        className="px-12 mt-5 text-white bg-blue-500 w-full flex justify-center py-2 rounded"
      >
        {spinner ? (
          <div
            style={{ borderTopColor: "transparent" }}
            className="w-5 h-5 border-2 border-white border-solid rounded-full animate-spin"
          />
        ) : (
          "Guardar"
        )}
      </button>
    </>
  );
}
