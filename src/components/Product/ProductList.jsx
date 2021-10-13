import { useState } from "react";
import { showImage } from "../../services/product";
import Modal from "../Global/Modal";
import Form from "./Form";

export default function ProductList({
  products,
  species,
  categories,
  vendors,
  brands,
}) {
  const [editProd, setEditProd] = useState();
  const [showModal, setShowModal] = useState(false);
  const handleEdit = (prd) => {
    setEditProd(prd);
    setShowModal(true);
  };
  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      {products?.products &&
        products?.products.map((prod) => (
          <div className="border shadow-md h-80 rounded p-5">
            <div className="grid grid-cols-2">
              <img src={showImage(prod.img)} alt="" className="w-20 h-20" />
              <div className="bg-green-500 w-12 h-12 ml-12 rounded-full flex justify-center items-center">
                <span className="text-white font-semibold">
                  {"$" + prod.price}
                </span>
              </div>
            </div>
            <p
              onClick={() => handleEdit(prod)}
              className="font-semibold cursor-pointer"
            >
              {prod.name}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Especie:</span>{" "}
              {prod.species?.type}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Proveedor:</span>{" "}
              {prod.vendors?.name}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Categoria:</span>{" "}
              {prod.category?.type}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Stock:</span> {prod.stock}
            </p>
            <button className="bg-blue-500 text-white rounded px-4 py-1 mt-2">
              Agregar al carrito
            </button>
          </div>
        ))}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Editar producto"
      >
        <Form
          species={species}
          brands={brands}
          categories={categories}
          vendors={vendors}
          product={editProd}
          setShowModal={setShowModal}
        />
      </Modal>
    </div>
  );
}
