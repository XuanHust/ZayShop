import './numberCart.scss'
import { useState } from 'react';

const NumberCart = () => {
    const [numberCart, setNumberCart] = useState(0)
    return(
        <div className='numberCart-container'>
            <div className='numberCart-content'>
                <input className='numbercart' type='button' value={numberCart}></input>
            </div>
        </div>
    )
}

export default NumberCart;