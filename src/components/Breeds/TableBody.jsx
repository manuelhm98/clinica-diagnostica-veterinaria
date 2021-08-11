import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readSpecies } from "../../redux/actions/species";
import Modal from "../Global/Modal";
import TD from "../Global/TD";
import Form from "./Form";

export default function TableBody({ breeds }) {
  const [showModal, setShowModal] = useState(false);
  const [breed, setBreed] = useState();
  const dispatch = useDispatch();
  const edit = (breed) => {
    setBreed(breed);
    setShowModal(true);
  };
  const species = useSelector((state) => state.specie.data);
  useEffect(() => {
    dispatch(readSpecies());
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {breeds.breeds?.map((breed) => (
        <tr key={breed.type}>
          <TD name={breed.id} />
          <TD name={breed.type} />
          <TD name={breed.species?.type} />
          <TD>
            <div className="flex">
              <button
                onClick={() => edit(breed)}
                className="bg-green-500 text-white text-xs px-6 m-1 py-1 rounded"
              >
                Editar
              </button>
              <button className="bg-red-500 text-white text-xs px-6 m-1 py-1 rounded">
                Eliminar
              </button>
            </div>
          </TD>
        </tr>
      ))}
      <Modal
        title="Editar raza"
        setShowModal={setShowModal}
        showModal={showModal}
      >
        <Form
          setShowModal={setShowModal}
          species={species}
          breed={breed}
        ></Form>
      </Modal>
    </>
  );
}
