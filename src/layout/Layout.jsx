import React from "react";
import NavbarIcons from "../components/Layout/NavbarIcons";
import NavbarOptions from "../components/Layout/NavbarOptions";

export default function Layout({ children }) {
  const [openMenu, setOpenMenu] = React.useState(true);
  return (
    <div className="w-screen h-screen bg-gray-200 p-8 overflow-hidden">
      <div className="w-full bg-gray-50 rounded-xl flex h-full border shadow ">
        <div className="" style={{ transition: "all .5s ease", width: "60px" }}>
          <NavbarIcons setOpenMenu={setOpenMenu} openMenu={openMenu} />
        </div>
        <div
          className={
            (openMenu ? "flex" : "hidden") +
            " bg-blue-600 w-48 absolute md:static border-solid lg:static mb-10 xl:static h-full side-bar"
          }
          style={{}}
        >
          <div className="flex">
            <NavbarOptions />
          </div>
        </div>
        <div
          className={" bg-gray-50 rounded-xl " + (openMenu ? "md:w-9/12 xl:9/12" : "w-full") + " p-1"}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
