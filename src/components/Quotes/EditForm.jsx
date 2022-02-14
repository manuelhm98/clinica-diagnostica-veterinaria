import React, { useState, useEffect, useMemo, useCallback } from "react";
import { formatDate, returnTime } from "../../utils/dates";
import Modal from "../Global/Modal";
import SelectDoctor from "./SelectDoctor";
import { SOCKET_URL } from "../../utils/constants";
import io from "socket.io-client";
import { editQuote } from "../../services/quotes";
import { Success } from "../Global/Alerts/Success";
import { useDispatch } from "react-redux";
import { addQuote } from "../../redux/actions/quote";

export default function EditForm({
  quote,
  doctor,
  doctors,
  setSearch,
  setShowModal,
  setPage
}) {
  const [show, setShow] = useState(false);
  const [doctorToQuote, setDoctorToQuote] = useState();
  const [date, setDate] = useState();
  const [online, setOnline] = useState(false);
  const dispatch = useDispatch();
  const serverURL = SOCKET_URL;
  const socket = useMemo(
    () =>
      io.connect(serverURL, {
        transports: ["websocket"],
      }),
    [serverURL]
  );
  useEffect(() => {
    socket.on("connect", () => setOnline(true));
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => setOnline(false));
  }, [socket]);

  const callSocket = useCallback(
    (id) => {
      socket.emit("new", id);
    },
    [socket]
  );
  const handleEdit = () => {
    const data = {
      ...quote,
      doctorsId: doctorToQuote ? doctorToQuote?.id : quote?.doctorsId,
      date: date ? `${date}${returnTime()}` : quote?.date,
    };
    editQuote(quote?.id, data).then(() => {
      callSocket(doctorToQuote ? doctorToQuote.usersId : doctor?.usersId);
      Success("Se edito la consulta");
      setShowModal(false);
      dispatch(addQuote(data));
    });
  };
  return (
    <div className="w-96">
      <div className="flex flex-col">
        <label className="text-xs">Doctor</label>
        {!doctorToQuote && (
          <span className=" font-semibold text-xs mt-3">
            {doctor?.names + " " + doctor?.lastnames}
          </span>
        )}
        <span className=" font-semibold text-xs mt-3">
          {doctorToQuote &&
            doctorToQuote.users?.names + " " + doctorToQuote.users?.lastnames}
        </span>
        <button
          onClick={() => setShow(true)}
          type="button"
          className="bg-green-500 font-medium text-white py-2 text-xs rounded mt-4"
        >
          Seleccionar doctor
        </button>
      </div>
      <div className="flex flex-col mt-3">
        <label className="text-xs">Fecha</label>
        <input
          onChange={(e) => setDate(e.currentTarget.value)}
          defaultValue={formatDate(quote?.date)}
          type="date"
          className="border rounded text-sm py-1 px-2 outline-none mt-2"
        />
      </div>
      <button
        onClick={handleEdit}
        className="bg-blue-500 text-white text-xs rounded px-16 mt-4 py-1"
      >
        Editar
      </button>
      <Modal showModal={show} setShowModal={setShow} title="Seleccionar doctor">
        <SelectDoctor
          setDoctorToQuote={setDoctorToQuote}
          setShowModalSelectDoc={setShow}
          doctors={doctors}
          setSearch={setSearch}
          setPage={setPage}
        />
      </Modal>
    </div>
  );
}
