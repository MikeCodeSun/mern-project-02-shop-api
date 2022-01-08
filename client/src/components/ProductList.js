import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

export default function ProductList() {
  const { products, loading } = useGlobalContext();

  if (loading) {
    return <h1 className="loading">loading...</h1>;
  }

  if (products.length === 0) {
    return <h1 className="loading">No Match</h1>;
  }

  return (
    <div className="products-container">
      {products.map((product) => {
        const { _id, name, price } = product;

        return (
          <article key={_id} className="product">
            <h3>{name}</h3>
            <h4>{price}$</h4>
            <Link to={`/product/${_id}`} className="btn">
              Details
            </Link>
          </article>
        );
      })}
    </div>
  );
}
