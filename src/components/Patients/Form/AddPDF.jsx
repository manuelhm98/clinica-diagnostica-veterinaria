import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import File from "../../../assets/file.png";
import { uploadPetPDF } from "../../../services/patients";
import { Success } from "../../Global/Alerts/Success";
import { Warning } from "../../Global/Alerts/Warning";
import { useDispatch } from "react-redux";
import { addPatient } from "../../../redux/actions/patiences";

export default function AddPDF({ patient, setreload, setShowModal }) {
  const [petFile, setPetFile] = useState();
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
    uploadPetPDF(patient?.id, petFile).then(() => {
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
        className="px-12 mt-5 text-white bg-blue-500 py-1 rounded"
      >
        Guardar
      </button>
    </>
  );
}
