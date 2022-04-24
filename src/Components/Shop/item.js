import './item.scss'
import { useState } from 'react'
import {
    NavLink,
} from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NumberCart from '../Cart/numberCart';

const Item = (props) => {
    const { id, name, price, model } = props

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
                                        <>
                                            <li className='shop-active'><i class="fa-solid fa-cart-plus"></i></li>
                                            {
                                                isCart &&
                                                <p className='hidden'>
                                                    <NumberCart id={id} name={name} price={price} model={model} />
                                                </p>
                                            }
                                        </>
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