import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Success } from "../Global/Alerts/Success";
import { Warning } from "../Global/Alerts/Warning";
import Modal from "../Global/Modal";
import SelectVendor from "./SelectVendor";
import SelectProduct from "./SelectProduct";
import { addNewShopping } from "../../services/shopping-history";
import { addShopping } from "../../redux/actions/shopping";

export default function Form({
  products,
  vendors,
  setPageProd,
  setPageVendor,
  setSearchProd,
  setSearchVendor,
  searchVendor,
  species,
  brands,
  categories,
  searchProd,
}) {
  const [showModalProd, setShowModalProd] = useState(false);
  const [showModalVendor, setShowModalVendor] = useState(false);
  const [vendor, setVendor] = useState();
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      quantity: Yup.number()
        .required("La cantidad de compra es requerida")
        .typeError("Cantidad invalida"),
      purchasePrice: Yup.number()
        .required("El precio de compra es requerido")
        .typeError("Precio invalido"),
      salePrice: Yup.number()
        .required("El precio de la venta es requerido")
        .typeError("Precio invalido"),
      nFiscal: Yup.string().required(
        "El numero de credito fiscal es requerido"
      ),
    }),
    onSubmit: (values) => {
      if (!product) {
        Warning("Debes seleccionar un producto primero");
        return;
      }
      if (!vendor) {
        Warning("Debes seleccionar un proveedor primero");
        return;
      }
      const data = {
        ...values,
        productsId: product?.id,
        vendorsId: vendor?.id,
      };
      addNewShopping(data).then(() => {
        Success("Se registro la compra con exito");
        dispatch(addShopping(data));
        window.location.reload();
      });
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">
                Cantidad de ingreso
              </label>
              <input
                type="text"
                name="quantity"
                onChange={formik.handleChange}
                placeholder="Ingresa la cantidad de compra"
                className={
                  "w-full border p-1 text-sm rounded outline-none hover:border-green-400 " +
                  (formik.errors.quantity && formik.touched.quantity
                    ? "border-red-400"
                    : "border-gray-300")
                }
              />
              {formik.errors.quantity && formik.touched.quantity && (
                <span className="text-sm font-normal text-red-400">
                  {formik.errors.quantity}
                </span>
              )}
            </div>
            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">Precio de compra</label>
              <input
                type="text"
                name="purchasePrice"
                onChange={formik.handleChange}
                defaultValue={""}
                placeholder="Ingresa el precio de la compra"
                className={
                  "w-full border p-1 text-sm rounded outline-none hover:border-green-400 " +
                  (formik.errors.purchasePrice && formik.touched.purchasePrice
                    ? "border-red-400"
                    : "border-gray-300")
                }
              />
              {formik.errors.purchasePrice && formik.touched.purchasePrice && (
                <span className="text-sm font-normal text-red-400">
                  {formik.errors.purchasePrice}
                </span>
              )}
            </div>
            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">Precio de venta</label>
              <input
                type="text"
                name="salePrice"
                onChange={formik.handleChange}
                defaultValue={""}
                placeholder="Ingresa el precio de venta"
                className={
                  "w-full border p-1 text-sm rounded outline-none hover:border-green-400 " +
                  (formik.errors.salePrice && formik.touched.salePrice
                    ? "border-red-400"
                    : "border-gray-300")
                }
              />
              {formik.errors.salePrice && formik.touched.salePrice && (
                <span className="text-sm font-normal text-red-400">
                  {formik.errors.salePrice}
                </span>
              )}
            </div>
            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">
                Numero de credito fiscal
              </label>
              <input
                type="text"
                name="nFiscal"
                onChange={formik.handleChange}
                defaultValue={""}
                placeholder="Ingresa el numero de credito fiscal"
                className={
                  "w-full border p-1 text-sm rounded outline-none hover:border-green-400 " +
                  (formik.errors.nFiscal && formik.touched.nFiscal
                    ? "border-red-400"
                    : "border-gray-300")
                }
              />
              {formik.errors.nFiscal && formik.touched.nFiscal && (
                <span className="text-sm font-normal text-red-400">
                  {formik.errors.nFiscal}
                </span>
              )}
            </div>
          </div>
          <div>
            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">Proveedor</label>
              <input
                placeholder="Selecciona el proveedor"
                defaultValue={vendor && vendor.name + " - " + vendor.nameVendor}
                className="w-full border p-1 text-sm rounded outline-none hover:border-green-400"
                readOnly
                disabled
              />
              <button
                type="button"
                onClick={() => setShowModalVendor(true)}
                className="bg-green-500 text-white py-1 text-xs rounded mt-4"
              >
                Seleccionar proveedor
              </button>
              <Modal
                showModal={showModalVendor}
                setShowModal={setShowModalVendor}
                title="Seleccionar proveedor"
              >
                <SelectVendor
                  setVendor={setVendor}
                  setPageVendor={setPageVendor}
                  searchVendor={searchVendor}
                  setSearchVendor={setSearchVendor}
                  setShowModalVendor={setShowModalVendor}
                  vendors={vendors}
                />
              </Modal>
            </div>
            <div className="flex flex-col p-1 mt-1">
              <label className="text-sm text-gray-400">Producto</label>
              <input
                placeholder="Selecciona el producto"
                defaultValue={product && product.name}
                className="w-full border p-1 text-sm rounded outline-none hover:border-green-400"
                readOnly
                disabled
              />
              <button
                type="button"
                onClick={() => setShowModalProd(true)}
                className="bg-green-500 text-white py-1 text-xs rounded mt-4"
              >
                Seleccionar producto
              </button>
              <Modal
                showModal={showModalProd}
                setShowModal={setShowModalProd}
                title="Seleccionar producto"
              >
                <SelectProduct
                  searchProd={searchProd}
                  setSearchProd={setSearchProd}
                  brands={brands}
                  categories={categories}
                  species={species}
                  products={products}
                  setPageProd={setPageProd}
                  setProduct={setProduct}
                  setShowModalProd={setShowModalProd}
                />
              </Modal>
            </div>
            <button
              type="submit"
              className="bg-blue-600 mt-4 w-full text-white rounded px-12 py-1 text-xs"
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function initialValues() {
  return {
    quantity: "",
    purchasePrice: "",
    salePrice: "",
    nFiscal: "",
    total: "",
    vendorsId: "",
  };
}
