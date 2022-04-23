import './shopsidebar.scss'
import { useState } from 'react';

const Shopsidebar = () => {

    const [isButton1, setIsButton1] = useState(false)
    const [isButton2, setIsButton2] = useState(false)
    const [isButton3, setIsButton3] = useState(false)

    const handleDropDown1 = () => {
        setIsButton1(!isButton1)
        setIsButton2(false)
        setIsButton3(false)
    }
    const handleDropDown2 = () => {
        setIsButton1(false)
        setIsButton2(!isButton2)
        setIsButton3(false)
    }
    const handleDropDown3 = () => {
        setIsButton1(false)
        setIsButton2(false)
        setIsButton3(!isButton3)
    }

    return (
        <div className='shopsidebar-container'>
            <div className='shopsidebar-content'>
                <h2>Categories</h2>
                <div className='dropdown'>
                    <p>Gender</p>
                    <li onClick={() => handleDropDown1()}>
                        <i class="fa-solid fa-angle-down"></i>
                    </li>
                </div>
                {
                    isButton1 &&
                    <div className='sub-dropdown'>
                        <li>Men</li>
                        <li>Women</li>
                    </div>
                }
                <div className='dropdown'>
                    <p>Saler</p>
                    <li onClick={() => handleDropDown2()}>
                        <i class="fa-solid fa-angle-down"></i>
                    </li>
                </div>
                {
                    isButton2 &&
                    <div className='sub-dropdown'>
                        <li>Sport</li>
                        <li>Luxury</li>
                    </div>
                }
                <div className='dropdown'>
                    <p>Product</p>
                    <li onClick={() => handleDropDown3()}>
                        <i class="fa-solid fa-angle-down"></i>
                    </li>
                </div>
                {
                    isButton3 &&
                    <div className='sub-dropdown'>
                        <li>Bag</li>
                        <li>Sweather</li>
                        <li>Sunglass</li>
                    </div>
                }
            </div>
        </div>
    )
}

export default Shopsidebar;