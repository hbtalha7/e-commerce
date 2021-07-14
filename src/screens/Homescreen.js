import React ,{useEffect}from "react";
import "./Homescreen.css";
// import data from "../data";
import { useDispatch, useSelector } from "react-redux";
import Product from '../components/Products'
import LoadingBox from '../components/Loadingbox'
import MessageBox from '../components/Messagebox'

import {productlist} from '../actions/productaction'
export default function Homescreen() {
//   const Products = data.products;
  const dispatch=useDispatch()
  const listproducts = useSelector(state => state.listproducts)
  const {loading,error,products}=listproducts
  useEffect(()=>{
    dispatch(productlist())
  },[dispatch]
  )
  return ( 
    <div>
      {loading? (<LoadingBox></LoadingBox>):
      error? (<MessageBox variant="danger">{error}</MessageBox>):
    (<div className="row">
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>)}
    </div>
  );
}
