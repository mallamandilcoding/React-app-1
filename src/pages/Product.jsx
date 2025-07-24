import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const [apidata, setApiData] = useState([]);
  useEffect(() => {
    const fetchDataFromApi = async () => {
      const api = await fetch("https://fakestoreapi.com/products");
      const data = await api.json();
      setApiData(data);
      // console.log("my data = ", data);
    };
    fetchDataFromApi();
  }, []);

  return (
    <>
      <div>
        {apidata.map((data) => (
          <div key={data.id}>
            <Link to={`/products/${data.id}`}>{data.title}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
