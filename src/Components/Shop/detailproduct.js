import './detailproduct.scss'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

import product_single_1 from "../Images/product_single_01.jpg"
import product_single_2 from "../Images/product_single_02.jpg"
import product_single_3 from "../Images/product_single_03.jpg"
import product_single_4 from "../Images/product_single_04.jpg"
import product_single_5 from "../Images/product_single_05.jpg"
import product_single_6 from "../Images/product_single_06.jpg"
import product_single_7 from "../Images/product_single_07.jpg"
import product_single_8 from "../Images/product_single_08.jpg"
import product_single_9 from "../Images/product_single_09.jpg"
import product_single_10 from "../Images/product_single_10.jpg"

import Item from './item';
import Slider from "react-slick";
export const baseUrl = '../Images/';

const DetailProduct = () => {

    let [number, setNumber] = useState(1)

    const handleMinus = () => {
        number <= 1 ?
            setNumber(1)
            :
            setNumber(number - 1)
    }
    const handlePlus = () => {
        setNumber(number + 1)
    }

    const handleNumber = (event) => {

        setNumber(event.target.value)
    }

    const handleAdd = () => {
        toast.success("Đã thêm vào giỏ hàng!")
    }

    const product_single = [
        product_single_1, product_single_2, product_single_3, product_single_4, product_single_5, product_single_6, product_single_7, product_single_8, product_single_9, product_single_10
    ]

    const subSettings = {
        customPaging: function (i) {
            return (
                <p>
                    <img src={product_single[i]} alt="product_single_01"></img>
                </p>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        arrows: false
    };
    const settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: false
                }
            }
        ]
    };

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
        <div className='detailProduct-container'>
            <div className='detailProduct'>
                <div className='detailProduct-content'>
                    <div className='content-left'>
                        <Slider {...subSettings}>
                            <div className='content-img'>
                                <img src={product_single[0]} alt="product_single_01"></img>
                            </div>
                            <div className='content-img'>
                                <img src={product_single[1]} alt="product_single_01"></img>
                            </div>
                            <div className='content-img'>
                                <img src={product_single[2]} alt="product_single_01"></img>
                            </div>
                            <div className='content-img'>
                                <img src={product_single[3]} alt="product_single_01"></img>
                            </div>
                            <div className='content-img'>
                                <img src={product_single[4]} alt="product_single_01"></img>
                            </div>
                            <div className='content-img'>
                                <img src={product_single[5]} alt="product_single_01"></img>
                            </div>
                            <div className='content-img'>
                                <img src={product_single[6]} alt="product_single_01"></img>
                            </div>
                            <div className='content-img'>
                                <img src={product_single[7]} alt="product_single_01"></img>
                            </div>
                            <div className='content-img'>
                                <img src={product_single[8]} alt="product_single_01"></img>
                            </div>
                            <div className='content-img'>
                                <img src={product_single[9]} alt="product_single_01"></img>
                            </div>
                        </Slider>
                    </div>
                    <div className='content-right'>
                        <div className='content-right-des'>
                            <h2>Active Wear</h2>
                            <p className='price'>$25.00</p>
                            <ul>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li className='rate'>Rating 4.8</li>
                                <li className='comment'>36 Comments</li>
                            </ul>
                            <h4>Brand: <span>Easy Wear</span></h4>
                            <h4 className='descrip'>Description:</h4>
                            <p className='des'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.</p>
                            <h4>Avaliable Color :<span>White / Black</span> </h4>
                            <h4 className='speci'>Specification:</h4>
                            <p className='spe'>Lorem ipsum dolor sit <br></br>
                                Amet, consectetur<br></br>
                                Adipiscing elit,set<br></br>
                                Duis aute irure<br></br>
                                Ut enim ad minim<br></br>
                                Dolore magna aliqua<br></br>
                                Excepteur sint</p>

                            <div className='Size_Quantity'>
                                <div className='size'>
                                    <h2>Size:</h2>
                                    <li>S</li>
                                    <li>M</li>
                                    <li>L</li>
                                    <li>XL</li>
                                </div>
                                <div className='quantity'>
                                    <h2>Quantity:</h2>
                                    <li><i class="fa-solid fa-minus"
                                        onClick={() => handleMinus()}
                                    ></i></li>
                                    <input className='number' value={number}
                                        type='button'
                                        onChange={(event) => handleNumber(event)}
                                    ></input>
                                    <li><i class="fa-solid fa-plus"
                                        onClick={() => handlePlus()}
                                    ></i></li>
                                </div>
                            </div>
                            <div className='buy_add'>
                                <button className='buy' type='button'>Buy</button>
                                <button className='add' type='button'
                                    onClick={() => handleAdd()}
                                >Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relatedProduct'>
                <h2>Related Product</h2>
                <div className='ralated-items'>
                    <Slider {...settings}>
                        {

                            listItem.map((item, index) => {
                                return (
                                    <div className='related-item'>
                                        <Item product={item}
                                        />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct;