import React from "react";
import PetSVG from "../assets/vet.svg";
import Login from "../components/Auth/Login";

const Auth = () => {
  return (
    <div>
      <div
        style={{ background: "#a0babf" }}
        className="w-screen h-screen overflow-hidden fixed flex content-center justify-center justify-items-center items-center"
      >
        <div
          className="bg-blue-800 transform -rotate-45 absolute -top-36 w-96 -left-40 h-96"
          style={{ borderRadius: "4rem" }}
        />
        <div
          className="bg-white grid grid-cols-2 p-10"
          style={{ width: "40rem", height: "30rem", borderRadius: "2.5rem" }}
        >
          <div className=" mt-24">
            <span className="text-blue-800 font-semibold text-xl">
              Bienvenido!!
            </span>
            <Login />
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-800">
              Clinica de <span style={{ color: "#5CB119" }}>Diagnostico</span>{" "}
              <span>Veterinario</span>
            </p>
          </div>
        </div>
        <div>
          <img src={PetSVG} className="w-96 absolute right-60" alt="null" />
        </div>
        <div
          className="bg-blue-800 transform -rotate-45 absolute -bottom-72 -right-32 h-96"
          style={{ borderRadius: "6rem", width: "30rem" }}
        />
      </div>
    </div>
  );
};

export default Auth;
