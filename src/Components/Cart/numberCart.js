import './numberCart.scss'
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const NumberCart = (props) => {

    return (
        <div className='numberCart-container'>
            <div className='numberCart-content'>
                <input className='numbercart' type='button' value={props.dataRedux.length}></input>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return(
        {
            dataRedux: state.ItemUpdates
        }
    )
}

export default connect(mapStateToProps)(NumberCart);