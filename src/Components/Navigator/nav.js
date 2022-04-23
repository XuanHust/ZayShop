import '../fontawesome-free-6.0.0-web/css/all.css'
import './nav.scss'
import { useEffect, useState } from 'react'
import useViewport from "../viewport/viewport";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Routes
} from "react-router-dom";
import Home from '../Home/home';
import About from '../About/about';
import Shop from '../Shop/shop';
import Contact from '../Contact/contact';
import DetailProduct from '../Shop/detailproduct';


const Nav = () => {

    const [isSearch, setIsSearch] = useState(false)
    const [navs, setNavs] = useState(false)

    const viewPort = useViewport();
    const isMobile = viewPort.width <= 768;

    const handleSearch = () => {
        setIsSearch(!isSearch)
    }

    const handleNavs = () => {
        setNavs(!navs)
    }

    return (
        <Router>
            <div className='nav-container'>
                <div className='nav-content'>
                    <h2>Zay</h2>
                    {
                        isMobile === false ?
                            <>
                                <div className='nav-main'>
                                    <li>
                                        <NavLink to='/ZayShop/' activeClassName="active">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/about'>About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/shop'>Shop</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/contact'>Contact</NavLink>
                                    </li>
                                </div>
                                <div className='nav-right'>
                                    {
                                        isSearch &&
                                        <input type='text'></input>
                                    }
                                    <li onClick={() => handleSearch()}>
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-cart-arrow-down"></i>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-user"></i>
                                    </li>
                                </div>
                            </>
                            :
                            <div className="navs"
                                onClick={() => handleNavs()}
                            >
                                <span className="nav1"></span>
                                <span className="nav2"></span>
                                <span className="nav3"></span>
                            </div>
                    }

                </div>
                {
                    navs &&
                    <div className='nav-sub'>
                        <div className='nav-sub-content'>
                            <li>
                                <NavLink to='/ZayShop/' activeClassName="active">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/shop'>Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'>Contact</NavLink>
                            </li>
                        </div>
                        <div className='nav-right'>
                            <input type='text' className='input'></input>
                            <li className='first'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </li>
                            <li>
                                <i class="fa-solid fa-cart-arrow-down"></i>
                            </li>
                            <li>
                                <i class="fa-solid fa-user"></i>
                            </li>
                        </div>
                    </div>
                }
            </div>
            <Routes>
                <Route path="/ZayShop" element={<Home />}>
                </Route>
                <Route path="/about" element={<About />}>
                </Route>
                <Route path="/shop" element={<Shop />}>
                </Route>
                <Route path="/contact" element={<Contact />}>
                </Route>
                <Route path="/shop/detailProduct" element={<DetailProduct />}>
                </Route>
            </Routes>
        </Router>
    )
}

export default Nav;