import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const url = "http://localhost:4000/api/v1/products/";

export default function SingleProductPage() {
  const [productItem, setProductItem] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchProduct = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${id}`);
      const data = await res.json();
      const { product } = data;
      console.log(product);

      setProductItem(product);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [id, fetchProduct]);

  if (loading) {
    return <h1 className="loading">loading...</h1>;
  }
  if (Object.keys(productItem).length === 0) {
    return <h1 className="loading">No Product</h1>;
  }

  const { company, name, price, rating } = productItem;
  return (
    <>
      <Link to="/" className="singleProduct-link">
        back to home
      </Link>
      <div className="singleProduct-container">
        <article className="singleProduct">
          <h3>name: {name}</h3>
          <h4>price: ${price}</h4>
          <h5>company:{company}</h5>
          <h5>rate:{rating}</h5>
        </article>
      </div>
    </>
  );
}
