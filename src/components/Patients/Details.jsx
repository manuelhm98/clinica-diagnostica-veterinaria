import React from "react";
import { showImage } from "../../services/patients";
import moment from "moment";

export default function Details({ patient }) {
  return (
    <div className="flex p-4">
      <ul className="w-96">
      <li className="text-gray-700">
          <span className="text-xl font-semibold">N° de expediente: </span>
          <span className="text-red-500 font-semibold">{patient?.exp}</span>
        </li>
        <li className="text-gray-700 mt-2">
          <span className="text-xl font-semibold">Nombre: </span>
          {patient?.names}
        </li>
        <li className="mt-2 text-gray-700">
          <span className="text-xl font-semibold ">Dueño: </span>
          <span className="uppercase">
            {patient.customers?.names} {patient.customers?.lastname}
          </span>
        </li>
        <li className="mt-2 text-gray-700">
          <span className="text-xl font-semibold">Sexo: </span>
          {patient.sexes?.type}
        </li>
        <li className="mt-2 text-gray-700">
          <span className="text-xl font-semibold">Tipo de paciente: </span>
          {patient.patientstype?.type}
        </li>
        <li className="mt-2 text-gray-700">
          <span className="text-xl font-semibold">Raza: </span>
          {patient.breeds?.type}
        </li>
        <li className="mt-2 text-gray-700">
          <span className="text-xl font-semibold">Color: </span>
          {patient.colors?.type}
        </li>
        <li className="mt-2 text-gray-700">
          <div className="text-xl font-semibold flex">
            Estado:{" "}
            <div className="relative mt-1 ml-3 inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                nameName="toggle"
                id="toggle"
                defaultChecked={patient.state}
                readOnly
                disabled
                className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                for="toggle"
                className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <span className="text-base font-normal">
              {patient.state ? "Activo" : "Inactivo"}
            </span>
          </div>
        </li>
        <li className="mt-2 text-gray-700">
          <span className="text-xl font-semibold">Edad: </span> {patient.age}
        </li>
        <li className="mt-2 text-gray-700">
          <span className="text-xl font-semibold">Peso: </span> {patient.weight}
        </li>
        <li className="mt-2 text-gray-700">
          <span className="text-xl font-semibold">Fecha de nacimiento: </span>
          {moment(patient.birthday).calendar()}
        </li>
      </ul>
      <div className="w-96">
        <div className="flex justify-center items-center content-center">
          <img
            className="rounded shadow w-72 p-2"
            src={showImage(patient?.img)}
            alt="null"
          />
        </div>
      </div>
    </div>
  );
}
