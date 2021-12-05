import { useState } from "react";
import Auth from "../Certifications/Auth";
import AuthForm from "../Certifications/AuthForm";
import ResponsabilityForm from "../Certifications/ResponsabilityForm";
import SanitaryForm from "../Certifications/SanitaryForm";

export default function BreadCrumbs() {
  const [showSanitary, setShowSanitary] = useState(false);
  const [showResp, setShowResp] = useState(false);
  const [showAuth, setShowAuth] = useState(true);
  const handleShowSaitary = () => {
    setShowSanitary(true);
    setShowResp(false);
    setShowAuth(false);
  };
  const handleShowResp = () => {
    setShowSanitary(false);
    setShowResp(true);
    setShowAuth(false);
  };
  const handleShowAuth = () => {
    setShowSanitary(false);
    setShowResp(false);
    setShowAuth(true);
  };
  return (
    <>
      <nav className="bg-grey-light p-3 rounded font-sans w-full m-4 mt-16">
        <ol className="list-reset flex text-grey-dark">
          <li onClick={handleShowSaitary} className="cursor-pointer">
            <span
              className={
                "text-blue-500 text-base font-thin" +
                (showSanitary ? " font-semibold" : " sm:font-thin")
              }
            >
              Certificado Sanitario
            </span>
          </li>
          <li>
            <span className="mx-4">/</span>
          </li>
          <li onClick={handleShowResp} className="cursor-pointer">
            <span
              className={
                "text-blue-500 text-base " +
                (showResp ? " font-semibold" : " sm:font-thin")
              }
            >
              Hoja de responsabilidades
            </span>
          </li>
          <li>
            <span className="mx-4">/</span>
          </li>
          <li onClick={handleShowAuth} className="cursor-pointer">
            <span
              className={
                "text-blue-500 text-base " +
                (showAuth ? " font-semibold" : " sm:font-thin")
              }
            >
              Autorizacion de estetica
            </span>
          </li>
        </ol>
      </nav>
      <div>
        {showSanitary && <SanitaryForm />}
        {showResp && <ResponsabilityForm />}
        {showAuth && <AuthForm />}
      </div>
    </>
  );
}
