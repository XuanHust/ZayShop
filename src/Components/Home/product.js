import './product.scss'
import gym from "../Images/feature_prod_01.jpg"
import cloud from "../Images/feature_prod_02.jpg"
import summer from "../Images/feature_prod_03.jpg"
import '../fontawesome-free-6.0.0-web/css/all.css'

const Product = () => {
    return (
        <div className='product-container'>
            <div className='product-content'>
                <div className='content-title'>
                    <h2>Featured Product</h2>
                    <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                </div>
                <div className='content-product'>
                    <div className='product'>
                        <div className='product-sub'>
                            <p className='img'>
                                <img src={gym} alt='Gym Weight'></img>
                            </p>
                            <div>
                                <li>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </li>
                                <li>$240.00</li>
                            </div>
                            <h2>Gym Weight</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.</p>
                        </div>
                    </div>
                    <div className='product'>
                        <div className='product-sub'>
                            <p className='img'>
                                <img src={summer} alt='Summer Addides Shoes'></img>
                            </p>
                            <div>
                                <li>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </li>
                                <li>$360.00</li>
                            </div>
                            <h2>Summer Addides Shoes</h2>
                            <p>Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.</p>
                        </div>

                    </div>
                    <div className='product'>
                        <div className='product-sub'>
                            <p className='img'>
                                <img src={cloud} alt='Cloud Nike Shoes'></img>
                            </p>
                            <div>
                                <li>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star star4"></i>
                                    <i class="fa-solid fa-star"></i>
                                </li>
                                <li>$480.00</li>
                            </div>
                            <h2>Cloud Nike Shoes</h2>
                            <p>Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;