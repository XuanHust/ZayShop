import '../fontawesome-free-6.0.0-web/css/all.css'
import './footer.scss'
import { Link, animateScroll as scroll } from "react-scroll";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

const Footer = () => {

    const [subscribe, setSubscribe] = useState('')
    const scrollToTop = () => {
        scroll.scrollToTop(); 
    };

    const handleSubscribe = (event) => {
        setSubscribe(event.target.value)
    }

    const handleButtonSubscribe = () => {
        if(subscribe.length){
            setSubscribe('')
            toast.success('Thanks you Subscribed!')
        }
        else{
            toast.error('Email is Empty!')
        }
    }

    return (
        <div className='footer-container'>
            <div className='footer-top'>
                <div className='footer-content'>
                    <div className='content-top'>
                        <div className='content-top-1'>
                            <h2>Zay Shop</h2>
                            <li>
                                <i class="fa-solid fa-location-dot"></i>
                                <p>123 Consectetur at ligula 10660</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-phone-flip"></i>
                                <p>010-020-0340</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-envelope"></i>
                                <p>info@company.com</p>
                            </li>
                        </div>
                        <div className='content-top-2'>
                            <h2>Products</h2>
                            <li>
                                Luxury
                            </li>
                            <li>
                                Sport Wear
                            </li>
                            <li>
                                Men's Shoes
                            </li>
                            <li>
                                Women's Shoes
                            </li>
                            <li>
                                Popular Dress
                            </li>
                            <li>
                                Gym Accessories
                            </li>
                            <li>
                                Sport Shoes
                            </li>
                        </div>
                        <div className='content-top-3'>
                            <h2>Further Info</h2>
                            <li>
                                Home
                            </li>
                            <li>
                                About Us
                            </li>
                            <li>
                                Shop Locations
                            </li>
                            <li>
                                FAQs
                            </li>
                            <li>
                                Contact
                            </li>
                        </div>
                    </div>
                    <div className='content-bottom'>
                        <div className='bottom-left'>
                            <li>
                                <i class="fa-brands fa-facebook-f"></i>
                            </li>
                            <li>
                                <i class="fa-brands fa-instagram"></i>
                            </li>
                            <li>
                                <i class="fa-brands fa-twitter"></i>
                            </li>
                            <li>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </li>
                        </div>
                        <div className='bottom-right'>
                            <form>
                                <input type="text" name='email' placeholder='Email address'
                                value={subscribe}
                                onChange={(event) => handleSubscribe(event)}
                                ></input>
                                <button type='button'
                                onClick={() => handleButtonSubscribe()}
                                >Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div>
                    <p>
                        Copyright © 2021 Company Name | Designed by <span>TemplateMo</span>
                    </p>
                    <button type='button'
                    onClick={() => scrollToTop()}>
                        <a href='#header'><i class="fa-solid fa-circle-arrow-up"></i>Top</a>
                        <Link
                            activeClass="active"
                            to="header"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ></Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer;