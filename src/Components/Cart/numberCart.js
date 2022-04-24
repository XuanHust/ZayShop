import './numberCart.scss'
import { useState, useEffect, useRef } from 'react';

const NumberCart = (props) => {
    const [numberCart, setNumberCart] = useState(0)
    const { id, name, price, model } = props


    return (
        <div className='numberCart-container'>
            <div className='numberCart-content'>
                <input className='numbercart' type='button' value={numberCart}></input>
            </div>
        </div>
    )
}

export default NumberCart;