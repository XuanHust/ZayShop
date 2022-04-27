import './shopcontent.scss'
import { useState } from 'react';

import { connect } from 'react-redux';

import Item from './item';

const Shopcontent = (props) => {


    const addItemm = (item) =>{
        props.addItemRedux(item)
    }

    return (
        <div className='shopcontent-container'>
            <div className='shopcontent-content'>
                <div className='title'>
                    <h2>All Men's Women's</h2>
                    <select>
                        <option>All</option>
                        <option>A to Z</option>
                        <option>Item</option>
                    </select>
                </div>
                <div className='shop-item'>

                    {
                        props.dataRedux.map((item, index) => {
                            return (

                                <div className='items'>
                                    <Item product={item} addItemm={addItemm}
                                    />
                                </div>

                            )
                        })
                    }

                </div>
                <div className='numberPage'>
                    <div className='number'>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return(
        {
            dataRedux: state.listItems
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return({
        addItemRedux: (itemAdd) => dispatch({type: 'ADD_ITEM', payload: itemAdd})
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopcontent);