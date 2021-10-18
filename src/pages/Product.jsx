import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Title from "../components/Global/Title";
import Modal from "../components/Global/Modal";
import Form from "../components/Product/Form";
import { useDispatch, useSelector } from "react-redux";
import { listSpecies } from "../redux/actions/species";
import { readCategories } from "../redux/actions/category";
import { listVendors } from "../redux/actions/vendors";
import { readBrands } from "../redux/actions/brand";
import InputSearch from "../components/Global/InputSearch";
import { readProducts } from "../redux/actions/product";
import ProductList from "../components/Product/ProductList";
import Pagination from "../components/Global/Pag";
import CartButton from "../components/Cart/CartButton";

export default function Product() {
  const [showModal, setShowModal] = useState(false);
  const [loadCart, setLoadCart] = useState(false);
  const [search, setSearch] = useState({
    name: "",
    category: "",
    species: "",
    vendors: "",
  });
  const [page, setPage] = useState(1);

  const species = useSelector((state) => state.specie.data);
  const categories = useSelector((state) => state.category.data);
  const vendors = useSelector((state) => state.vendor.data);
  const brands = useSelector((state) => state.brand.data);
  const products = useSelector((state) => state.product.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listSpecies());
    dispatch(readCategories());
    dispatch(listVendors());
    dispatch(readBrands());
    return;
  }, [dispatch]);

  useEffect(() => {
    return dispatch(
      readProducts(
        page,
        search.name,
        search.category,
        search.species,
        search.vendors
      )
    );
  }, [dispatch, search, page]);

  return (
    <Layout>
      <div className="p-8 flex flex-col">
        <div>
          <Title name="Listado de productos" />
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded"
          >
            Agregar
          </button>
          <CartButton setLoadCart={setLoadCart} loadCart={loadCart} />
          <InputSearch
            handleChange={(e) =>
              setSearch({ ...search, name: e.currentTarget.value })
            }
            label="Buscar por nombre"
            placeholder="Escribe el nombre del producto para buscar"
          />
          <div className="grid grid-cols-3 mt-3">
            <div className="grid grid-rows-2">
              <label className="text-gray-500 text-xs">
                Buscar por categoria
              </label>
              <select
                onChange={(e) =>
                  setSearch({ ...search, category: e.currentTarget.value })
                }
                defaultValue={"DEFAULT"}
                className="border mr-6 py-1 text-xs px-2 rounded outline-none"
              >
                <option disabled selected value={"DEFAULT"}>
                  Selecciona la categoria
                </option>
                {categories &&
                  categories?.map((sp) => (
                    <option key={sp.id} value={sp.type}>
                      {sp.type}
                    </option>
                  ))}
              </select>
            </div>
            <div className="grid grid-rows-2">
              <label className="text-gray-500 text-xs">
                Buscar por especie
              </label>
              <select
                onChange={(e) =>
                  setSearch({ ...search, species: e.currentTarget.value })
                }
                defaultValue={"DEFAULT"}
                className="border mr-6 py-1 text-xs px-2 rounded outline-none"
              >
                <option disabled selected value={"DEFAULT"}>
                  Selecciona la especie
                </option>
                {species?.specie &&
                  species?.specie.map((sp) => (
                    <option key={sp.id} value={sp.type}>
                      {sp.type}
                    </option>
                  ))}
              </select>
            </div>
            <div className="grid grid-rows-2">
              <label className="text-gray-500 text-xs">
                Buscar por proveedor
              </label>
              <select
                onChange={(e) =>
                  setSearch({ ...search, vendors: e.currentTarget.value })
                }
                defaultValue={"DEFAULT"}
                className="border mr-6 py-1 text-xs px-2 rounded outline-none"
              >
                <option disabled selected value={"DEFAULT"}>
                  Selecciona el proveedor
                </option>
                {vendors?.vendors &&
                  vendors?.vendors.map((v) => (
                    <option key={v.id} value={v.name}>
                      {v.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
        <ProductList
          brands={brands}
          vendors={vendors?.vendors}
          categories={categories}
          species={species?.specie}
          products={products}
          setLoadCart={setLoadCart}
        />
        <Pagination
          last={products?.totalpages}
          className="pagination-bar"
          onPageChange={setPage}
          totalCount={products?.totalItems}
          currentPage={products?.currentPage}
          pageSize={products?.take}
        />
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          title="Agregar producto"
        >
          <Form
            brands={brands}
            vendors={vendors?.vendors}
            categories={categories}
            species={species?.specie}
            setShowModal={setShowModal}
          />
        </Modal>
      </div>
    </Layout>
  );
}
