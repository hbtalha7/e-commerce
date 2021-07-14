import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productdetail } from "../actions/productaction";
import Loadingbox from "../components/Loadingbox";
import Messagebox from "../components/Messagebox";
import Ratings from "../components/Ratings";
// import data from "../data";
import "./Homescreen.css";
export default function Productscreen(props) {
  const product_id = props.match.params.id;
  const dispatch = useDispatch();
  const productdetails = useSelector((state) => state.productdetails);
  const { loading, error, product } = productdetails;
  const [qty, setQty] = useState(1);
  console.log(product_id);
  useEffect(() => {
    dispatch(productdetail(product_id));
  }, [dispatch, product_id]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${product_id}?qty=${qty}`);
  };
  return (
    <div>
      {loading? (<Loadingbox></Loadingbox>):
      error? (<Messagebox variant="danger">{error}</Messagebox>):
      (
      <div>
      <Link to="/">Back to Home</Link>
      <div className="row top">
        <div className="col-1">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>

        <div className="col-2">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Ratings
                rating={product.rating}
                numreview={product.numReviews}
              ></Ratings>
            </li>
            <li>
              <h1>{product.description}</h1>
            </li>
            <li>
              <h1>${product.price}</h1>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price:</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  Status:
                  {product.numReviews > 1 ? (
                    <span className="success">In Stock</span>
                  ) : (
                    <span className="error">Unavailable</span>
                  )}
                </div>
              </li>
              {product.countInStock > 0 && (
                <>
                  <li>
                    <div className="row">
                      <div>Qty</div>
                      <div>
                        <select
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={addToCartHandler}
                      className="primary block"
                    >
                      Add to Cart
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      </div>)}
    </div>
  );
}
