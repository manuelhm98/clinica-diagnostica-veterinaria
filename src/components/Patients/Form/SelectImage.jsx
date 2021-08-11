import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useCallback } from "react";
import Profile from "../../../assets/profile.png";
import { useDropzone } from "react-dropzone";
import { showImage } from "../../../services/patients";

export default function SelectImage({ setPetfile,patient}) {
  const [petImage, setPetimage] = useState(Profile);
  const onDropImage = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    setPetimage(URL.createObjectURL(file));
    setPetfile(file);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { getRootProps: getRootImgProps, getInputProps: getInputImgProps } =
    useDropzone({
      accept: "image/jpeg, image/png",
      noKeyboard: true,
      multiple: false,
      onDrop: onDropImage,
    });
  return (
    <>
      <div
        {...getRootImgProps()}
        className="flex justify-center shadow rounded p-4 items-center mt-4"
      >
        <img
          src={patient ? showImage(patient?.img) : Profile}
          className="rounded w-40"
          alt="null"
        />
      </div>
      <label className="w-full text-xs py-1 mt-3 p-1 flex items-center bg-white rounded-lg tracking-wide  border cursor-pointer">
        <FontAwesomeIcon className="text-gray-600 ml-2" icon={faFolder} />
        <span className="text-gray-500 leading-normal ml-4 ">
          Seleccionar una imagen
        </span>
        <input {...getInputImgProps()} type="file" className="hidden" />
      </label>
    </>
  );
}
