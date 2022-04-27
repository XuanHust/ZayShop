import './itemCart.scss'
import { connect } from 'react-redux'

const ItemCart = (props) => {

    const { item } = props
    console.log("hello", props)

    const handleRemove = (item) => {
        props.removeItemRedux(item)
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
                onClick={(item) => handleRemove(item)}
                >Remove</button>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return({
        removeItemRedux: (itemAdd) => dispatch({type: 'REMOVE_ITEM', payload: itemAdd})
    })
}

export default connect(mapDispatchToProps)(ItemCart);