import './itemCart.scss'
import { useState } from 'react'

const ItemCart = (props) => {

    const { item } = props

    const handleRemove = () => {
        props.removeitem(props.item)
    }

    return (
        <div className='itemcart-container'>
            <div className='item'>
                <p className='img'>
                    <img src={item.model} alt={item.name} />
                </p>
                <h3>{item.name}</h3>
                <p className='size'>M/L/X/XL</p>
                <li>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </li>
                <p className='price'>$ {item.price}</p>
                <button type='button'
                onClick={() => handleRemove()}
                >Remove</button>
            </div>
        </div>
    )
}

export default ItemCart;