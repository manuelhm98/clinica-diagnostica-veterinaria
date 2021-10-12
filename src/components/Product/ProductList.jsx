import React from "react";
import IMG from "../../assets/profile.png";

export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      {products?.products &&
        products?.products.map((prod) => (
          <div className="border shadow-md h-80 rounded p-5">
            <div className="grid grid-cols-2">
              <img src={IMG} alt="" className="w-20 h-20" />
              <div className="bg-green-500 w-12 h-12 ml-12 rounded-full flex justify-center items-center">
                <span className="text-white font-semibold">{"$"+prod.price}</span>
              </div>
            </div>
            <p className="font-semibold">{prod.name}</p>
            <p className="mt-2">
              <span className="font-semibold">Especie:</span> {prod.species?.type}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Proveedor:</span> {prod.vendors?.name}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Categoria:</span> {prod.category?.type}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Stock:</span> {prod.stock}
            </p>
            <button className="bg-blue-500 text-white rounded px-4 py-1 mt-2">
              Agregar al carrito
            </button>
          </div>
        ))}
    </div>
  );
}
