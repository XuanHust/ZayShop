import './shop.scss'
import AboutBrands from '../About/aboutBrands';
import Shopsidebar from './shopsidebar';

import Shopcontent from './shopcontent';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Routes
} from "react-router-dom";

const Shop = (props) => {


    const onUpCart2 = (value)=>{
        props.onUpCart(value)
    }

    return (
        <>
            <div className='shop-container'>
                <Shopsidebar />
                <Shopcontent onUpCart2={onUpCart2}/>
            </div>
            <AboutBrands />
        </>
    )
}

export default Shop;