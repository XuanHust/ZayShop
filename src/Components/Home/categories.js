import './categories.scss'
import watches from "../Images/category_img_01.jpg"
import shoes from "../Images/category_img_02.jpg"
import accessories from "../Images/category_img_03.jpg"

const Categories = () => {
    return (
        <div className='categories-container'>
            <div className='categories-content'>
                <div className='content-top'>
                    <h2>Categories of The Month</h2>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='content-bottom'>
                    <div className='content'>
                        <div className='content-inner'>
                            <p>
                                <img src={watches} alt='Watches'></img>
                            </p>
                            <h2>Watches</h2>
                            <button type='button'>Go Shop</button>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content-inner'>
                            <p>
                                <img src={shoes} alt='Shoes'></img>
                            </p>
                            <h2>Shoes</h2>
                            <button type='button'>Go Shop</button>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content-inner'>
                            <p>
                                <img src={accessories} alt='Accessories'></img>
                            </p>
                            <h2>Accessories</h2>
                            <button type='button'>Go Shop</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;