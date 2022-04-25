import './numberCart.scss'
import { useState, useEffect } from 'react';

const NumberCart = (props) => {

    const [numberOfCart, setNumberOfCart] = useState(0)

    return (
        <div className='numberCart-container'>
            <div className='numberCart-content'>
                <input className='numbercart' type='button' value={props.NumberCart}></input>
            </div>
        </div>
    )
}

export default NumberCart;