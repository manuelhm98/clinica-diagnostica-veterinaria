import React from "react";
import Table from "../Global/Table";
import TD from "../Global/TD";
import TH from "../Global/TH";

export default function SelectUser({ employees, setUser, setShowModal }) {
  const setUserToDoctor = (user) => {
    setUser(user);
    setShowModal(false);
  };
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <TH name="Nombre" />
            <TH name="Apellido" />
            <TH name="Email" />
            <TH name="Acciones" />
          </tr>
        </thead>
        <tbody>
          {employees.users &&
            employees.users?.map((emp) => (
              <tr key={emp.id}>
                <TD name={emp.names} />
                <TD name={emp.lastnames} />
                <TD name={emp.email} />
                <TD>
                  <div className="flex">
                    <button
                      onClick={() => setUserToDoctor(emp)}
                      className="bg-green-500 text-white rounded py-1 text-xs px-4"
                    >
                      Seleccionar
                    </button>
                  </div>
                </TD>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
