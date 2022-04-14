import React, {useEffect} from "react";
import {useDispatch, useSelector}from 'react-redux'
import ProductComponent from "./ProductComponent";
import axios from 'axios';
import {setProducts} from '../containers/redux/actions/productAction'
const ProductListing =()=> {
const products = useSelector ((state)=> state);

const dispatch = useDispatch();
const fetchProduct = async ()=>{
const response = await axios
.get('https://fakestoreapi.com/products')
.catch((err)=>{
    console.log("Err",err);
})

dispatch(setProducts(response.data));
};
useEffect(()=>{
    fetchProduct();
})
//console.log("products:",products);


    return(
<>
<div className="ui grid container">

    <ProductComponent/>
</div>
</>

    )
}

export default ProductListing;