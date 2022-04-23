import './shopcontent.scss'
import { useState } from 'react';
import shop_1 from "../Images/shop_01.jpg"
import shop_2 from "../Images/shop_02.jpg"
import shop_3 from "../Images/shop_03.jpg"
import shop_4 from "../Images/shop_04.jpg"
import shop_5 from "../Images/shop_05.jpg"
import shop_6 from "../Images/shop_06.jpg"
import shop_7 from "../Images/shop_07.jpg"
import shop_8 from "../Images/shop_08.jpg"
import shop_9 from "../Images/shop_09.jpg"
import shop_10 from "../Images/shop_10.jpg"
import shop_11 from "../Images/shop_11.jpg"
import shop_12 from "../Images/shop_01.jpg"
import Item from './item';

const Shopcontent = () => {

    const [listItem, setListItem] = useState([
        { id: "1", name: 'Oupidatat non_1', price: '250.00', model: shop_1 },
        { id: "2", name: 'Oupidatat non_2', price: '250.00', model: shop_2 },
        { id: "3", name: 'Oupidatat non_3', price: '250.00', model: shop_3 },
        { id: "4", name: 'Oupidatat non_4', price: '250.00', model: shop_4 },
        { id: "5", name: 'Oupidatat non_5', price: '250.00', model: shop_5 },
        { id: "6", name: 'Oupidatat non_6', price: '250.00', model: shop_6 },
        { id: "7", name: 'Oupidatat non_7', price: '250.00', model: shop_7 },
        { id: "8", name: 'Oupidatat non_8', price: '250.00', model: shop_8 },
        { id: "9", name: 'Oupidatat non_9', price: '250.00', model: shop_9 },
        { id: "10", name: 'Oupidatat non_10', price: '250.00', model: shop_10 },
        { id: "11", name: 'Oupidatat non_11', price: '250.00', model: shop_11 },
        { id: "12", name: 'Oupidatat non_12', price: '250.00', model: shop_12 },
    ])

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
                        listItem.map((item, index) => {
                            return (

                                <div className='items'>
                                    <Item id={item.id}
                                        name={item.name}
                                        price={item.price}
                                        model={item.model}
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

export default Shopcontent;