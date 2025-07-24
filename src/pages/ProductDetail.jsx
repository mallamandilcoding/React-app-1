import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  console.log(useParams());
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Store the product data

  // Fetch the product data based on the id
  useEffect(() => {
    const fetchProductData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProductData();
  }, [id]);
  console.log(product);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <p>Price: {product.title}</p>
      <p>Descriptoin: {product.description}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating.rate}</p>
      <img src={product.image} alt="" />
    </>
  );
};

export default ProductDetail;
