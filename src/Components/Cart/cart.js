import './cart.scss'
import { useState, useEffect } from 'react'

const Cart = (props) => {

    const [listCart, setListCart] = useState([])
    const { id, name, price, model } = props

    
    console.log("props is cart:>>>", listCart)

        useEffect(() => {
            console.log("hello nha!")
            let object = {id:id, name:name, price:price, model:model}
            console.log("object", object)
            setListCart([...listCart, object])
        },[])

    return(
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
                    Empty :(
                </div>
            </div>
        </div>
    )
}

export default Cart;