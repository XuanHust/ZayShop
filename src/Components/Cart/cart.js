import './cart.scss'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ItemCart from '../Shop/itemCart'

const Cart = (props) => {

    console.log("props is cart:>>>", props.dataRedux)

    let cost = 0

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
                                    <ItemCart item={item}/>
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

export default connect(mapStateToProps)(Cart);