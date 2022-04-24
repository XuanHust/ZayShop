import './numberCart.scss'
import { useState, useEffect} from 'react';

const NumberCart = (props) => {

    const [numberCart, setNumberCart] = useState(0)

    const { id, name, price, model } = props

    
    // console.log("props is:>>>", props)

    return (
        <div className='numberCart-container'>
            <div className='numberCart-content'>
                <input className='numbercart' type='button' value={numberCart}></input>
            </div>
        </div>
    )
}

export default NumberCart;