import './item.scss'
import { useState, useEffect } from 'react'
import {
    NavLink,
} from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NumberCart from '../Cart/numberCart';
import Cart from '../Cart/cart';

const Item = (props) => {
    const { product, numberCart } = props

    const [isShow, setIsShown] = useState(false)

    const [isHeart, setIsHeart] = useState(true)

    const [isEye, setIsEye] = useState(false)

    const [isShop, setIsShop] = useState(true)

    const [isCart, setIsCart] = useState(true)


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
        let number = numberCart + 1
        props.onSetNumberCart(number)
        toast.success("Đã thêm vào giỏ hàng!")
        setTimeout(() => {
            setIsCart(false)
        }, 300)
    }

    return (
        <div className='item-container'>
            <div className='item-content'>
                <div className='item'>
                    <p className='img'
                        onMouseEnter={() => handleMouseEnter()}
                        onMouseLeave={() => handleMouseLeave()}
                    >
                        <img src={product.model} alt={product.name}></img>
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
                                        <>
                                            <li className='shop-active'><i class="fa-solid fa-cart-plus"></i></li>
                                            {
                                                isCart &&
                                                <p className='hidden'>
                                                    <NumberCart numberCart={numberCart} />
                                                    <Cart product={product} />
                                                </p>
                                            }
                                        </>
                                }
                            </ul>
                        }
                    </p>
                    <h3><NavLink to='/shop/detailProduct'>{product.name}</NavLink></h3>
                    <p className='size'>M/L/X/XL</p>
                    <li>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <p className='price'>$ {product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Item;