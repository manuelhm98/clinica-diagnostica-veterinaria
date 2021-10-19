import React from "react";
import Title from "../components/Global/Title";
import Form from "../components/Shopping/Form";
import Layout from "../layout/Layout";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { readProducts } from "../redux/actions/product";
import { readVendors } from "../redux/actions/vendors";
import { listSpecies } from "../redux/actions/species";
import { readCategories } from "../redux/actions/category";
import { readBrands } from "../redux/actions/brand";

export default function AddShoppingHistory() {
  const products = useSelector((state) => state.product.data);
  const vendors = useSelector((state) => state.vendor.data);
  const species = useSelector((state) => state.specie.data);
  const categories = useSelector((state) => state.category.data);
  const brands = useSelector((state) => state.brand.data);
  const [pageProd, setPageProd] = useState(1);
  const [searchProd, setSearchProd] = useState({
    name: "",
    category: "",
    species: "",
    brands: "",
  });
  const [pageVendor, setPageVendor] = useState(1);
  const [searchVendor, setSearchVendor] = useState({ name: "", vendor: "" });
  const dispatch = useDispatch();
  useEffect(() => {
    return dispatch(
      readProducts(
        pageProd,
        searchProd.name,
        searchProd.category,
        searchProd.species,
        searchProd.brands,
        4
      )
    );
  }, [dispatch, pageProd, searchProd]);

  useEffect(() => {
    return dispatch(
      readVendors(pageVendor, searchVendor.name, searchVendor.vendor)
    );
  }, [dispatch, pageVendor, searchVendor]);

  useEffect(() => {
    dispatch(listSpecies());
    dispatch(readCategories());
    dispatch(readBrands());
    return;
  }, [dispatch]);
  return (
    <Layout>
      <div className="p-8">
        <Title name="Nueva compra" />
        <div className="mt-4 p-8 w-full rounded shadow border">
          <Form
            species={species}
            brands={brands}
            categories={categories}
            products={products}
            vendors={vendors}
            setPageProd={setPageProd}
            setPageVendor={setPageVendor}
            setSearchProd={setSearchProd}
            setSearchVendor={setSearchVendor}
            searchVendor={searchVendor}
            searchProd={searchProd}
          />
        </div>
      </div>
    </Layout>
  );
}
