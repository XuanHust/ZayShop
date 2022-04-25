import './cart.scss'
import { useState, useEffect } from 'react'
import Item from '../Shop/item'

const Cart = (props) => {

    const { product } = props


    console.log("props is cart:>>>", product)


    return (
        <div className='cart-container'>
            <div className='cart-content'>
                <div className='cart-top'>
                    <h2 className='title'>Giỏ Hàng</h2>
                    <div className='infor'>
                        <h2>Tổng Tiền</h2>
                        <p>0Đ</p>
                        <button type='button'>Mua tất cả</button>
                    </div>
                </div>
                <div className='cart-product'>
                    Empty:(
                </div>
            </div>
        </div>
    )
}

export default Cart;