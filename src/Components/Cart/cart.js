import './cart.scss'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ItemCart from '../Shop/itemCart'

const Cart = (props) => {

    let cost = 0

    const removeitem = (item) => {
        props.removeItemRedux(item)
    } 

    return (
        <div className='cart-container'>
            <div className='cart-content'>
                <div className='cart-top'>
                    <h2 className='title'>Giỏ Hàng</h2>
                    <div className='infor'>
                        <h2>Tổng Tiền</h2>
                        <p>
                            {
                                props.dataRedux && props.dataRedux.length > 0 &&
                                    props.dataRedux.map((item, index) => {
                                        cost = cost + item.price
                                    })
                            }
                            $ {cost}
                        </p>
                        <button type='button'>Mua tất cả</button>
                    </div>
                </div>
                <div className='cart-product'>
                    {
                        props.dataRedux && props.dataRedux.length > 0 ?
                            props.dataRedux.map((item, index) => {
                                return (
                                    <ItemCart item={item} removeitem={removeitem}/>
                                )
                            })
                            :
                            <div> Empty:( </div>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return (
        {
            dataRedux: state.ItemUpdates
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return({
        removeItemRedux: (itemRemove) => dispatch({type: 'REMOVE_ITEM', payload: itemRemove})
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);