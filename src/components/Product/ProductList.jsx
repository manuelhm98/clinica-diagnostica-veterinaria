import { useState, useEffect } from "react";
import { showImage, deleteQuote } from "../../services/product";
import { getItems, setItemCart } from "../../utils/cart";
import Modal from "../Global/Modal";
import Form from "./Form";
import ShowImage from "./ShowImage";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { readProducts } from "../../redux/actions/product";

export default function ProductList({
  products,
  species,
  categories,
  vendors,
  brands,
  setLoadCart,
}) {
  const [editProd, setEditProd] = useState();
  const [showModal, setShowModal] = useState(false);
  const [prod, setProd] = useState();
  const dispatch = useDispatch()
  const handleEdit = (prd) => {
    setEditProd(prd);
    setShowModal(true);
  };
  useEffect(() => {
    if (prod) {
      let values = {
        id: prod?.id,
        qt: 1,
        price: prod?.price,
        total_price: prod?.price,
        img: prod?.img,
        name: prod?.name,
      };
      setItemCart(values);
      setProd(undefined);
      setLoadCart(true);
    }
    return;
  }, [prod, setLoadCart]);

  const remove = async (id)=>{
    const result = await deleteQuote(id)

    if(result.ok){
      toast.success("Se elimino el producto")
      dispatch(readProducts())
    }else{
      toast.error("Error al eliminar producto")
    }
  }

  return (
    <>
      {typeof products?.products === "undefined" && (
        <p className="flex mt-8">No hay productos para mostrar</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {products?.products &&
          products?.products.map((prod) => (
            <div key={prod.id} className="border shadow-md h-auto rounded p-5">
              <div className="grid grid-cols-2">
                <div className="relative p-5">
                <div className="bg-green-500 absolute  w-12 h-12 rounded-full flex flex-col justify-center items-center">
                    <span className="text-white text-xs font-semibold">
                      {"$" + prod.price}
                    </span>
                  </div>
                  <ShowImage name={prod?.img} cssClass="w-[60%]" />
                </div>
                <div>
                  
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
                    <span className="font-semibold">Categoria:</span>{" "}
                    {prod.category?.type}
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold">Marca:</span>{" "}
                    {prod.brands?.brand}
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold">Stock:</span> {prod.stock}
                  </p>
                  <button
                    onClick={() => setProd(prod)}
                    className="bg-blue-500 text-white rounded px-4 py-1 mt-2"
                  >
                    Agregar al carrito
                  </button>
                  <button onClick={()=>remove(prod.id)} className="bg-red-500 text-white rounded px-4 py-1 mt-2">
                    Eliminar producto
                  </button>
                </div>
              </div>
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
    </>
  );
}
