import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Ratings from "./Ratings";
export default function Products(props) {
  const { key, product } = props;
  return (
    <div key={key} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name}></img>
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Ratings
          rating={product.rating}
          numreview={product.numReviews}
        ></Ratings>
        <div className="price">
          <p>$ {product.price}</p>
        </div>
      </div>
    </div>
  );
}
