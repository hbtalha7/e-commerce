import { PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../consants/producctcontants"
import data from "../data"

export const productlist=()=>(dispatch)=>{
    dispatch({
        type:PRODUCT_LIST_REQUEST
    })
    try {
        const products=data.products
        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload:products
        })
    } catch (e) {
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload: e.message
        })
    }   
}

export const productdetail=(product_id)=> (dispatch)=>{
    dispatch({
        type:PRODUCT_DETAIL_REQUEST,
        payload:product_id
    })
    try {
        const product=data.products.find((x)=> x._id=== Number(product_id))
        dispatch({
            type:PRODUCT_DETAIL_SUCCESS,
            payload:product
        })
    } catch (e) {
            dispatch({
                type:PRODUCT_DETAIL_FAIL,
                payload: e.Respose && e.Response.data.message?
                e.Response.data.message:
                e.message
            })
    }
}