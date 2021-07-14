import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../consants/cartcontants"
import data from '../data'
export const addToCart=(product_id,qty)=>(dispatch,getState)=>{
    const item=data.products.find((x)=>x._id===Number(product_id))
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            name:item.name,
            image:item.image,
            price:item.price,
            cocountInStock:item.countInStock,
            product:item._id,
            qty
        }
    })
    localStorage.setItem('cartItem',JSON.stringify(getState().cart.cartItems))
}
export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };