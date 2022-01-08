import React from "react";
import ProductList from "../components/ProductList";
import SearchForm from "../components/SearchForm";
import { useGlobalContext } from "../context";

export default function HomePage() {
  return (
    <section className="section-center">
      <SearchForm />
      <ProductList />
    </section>
  );
}
