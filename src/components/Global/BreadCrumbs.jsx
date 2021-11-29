import { useState } from "react";
import Sanitary from "../Certifications/Sanitary";
import ResponsabilityForm from "../Certifications/ResponsabilityForm";

export default function BreadCrumbs() {
  const [showSanitary, setShowSanitary] = useState(true);
  const [showResp, setShowResp] = useState(false);
  const handleShowSaitary = () => {
    setShowSanitary(true);
    setShowResp(false);
  };
  const handleShowResp = () => {
    setShowSanitary(false);
    setShowResp(true);
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
        </ol>
      </nav>
      <div>
        {showSanitary && <Sanitary />}
        {showResp && (
          <>
            <ResponsabilityForm />
          </>
        )}
      </div>
    </>
  );
}
