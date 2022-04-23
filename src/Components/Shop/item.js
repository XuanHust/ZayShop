import './item.scss'
import { useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Routes
} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = (props) => {
    const { id, name, price, model } = props

    const [isShow, setIsShown] = useState(false)

    const [isHeart, setIsHeart] = useState(true)

    const [isEye, setIsEye] = useState(false)

    const [isShop, setIsShop] = useState(true)

    const handleMouseEnter = () => {
        setIsShown(true)
    }
    const handleMouseLeave = () => {
        setIsShown(false)
    }

    const handleHeart = () => {
        setIsHeart(!isHeart)
    }

    const handleEye = () => {
        setIsEye(!isEye)
    }

    const handleShop = () => {
        setIsShop(!isShop)
        toast.success("Đã thêm vào giỏ hàng!")
    }

    return (
            <div className='item-container'>
                <div className='item-content'>
                    <div className='item'>
                        <p className='img'
                            onMouseEnter={() => handleMouseEnter()}
                            onMouseLeave={() => handleMouseLeave()}
                        >
                            <img src={model} alt={name}></img>
                            {
                                isShow &&
                                <ul>
                                    {
                                        isHeart ?
                                            <li onClick={() => handleHeart()}><i class="fa-solid fa-heart"></i></li>
                                            :
                                            <li className='heart-active' onClick={() => handleHeart()}><i class="fa-solid fa-heart"></i></li>
                                    }
                                    {
                                        isEye ?
                                            <li onClick={() => handleEye()}><i class="fa-solid fa-eye-slash"></i></li>
                                            :
                                            <li onClick={() => handleEye()}><i class="fa-solid fa-eye"></i></li>
                                    }
                                    {
                                        isShop ?
                                            <li onClick={() => handleShop()}><i class="fa-solid fa-cart-plus"></i></li>
                                            :
                                            <li className='shop-active'><i class="fa-solid fa-cart-plus"></i></li>
                                    }
                                </ul>
                            }
                        </p>
                        <h3><NavLink to='/shop/detailProduct'>{name}</NavLink></h3>
                        <p className='size'>M/L/X/XL</p>
                        <li>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </li>
                        <p className='price'>$ {price}</p>
                    </div>
                </div>
            </div>
    )
}

export default Item;