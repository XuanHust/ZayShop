import './header.scss'
import '../fontawesome-free-6.0.0-web/css/all.css'

const Header = () => {
    return (
        <div className='header-container' id='header' title='header'>
            <div className='header-content'>
                <div className='content-left'>
                    <li>
                        <i class="fa-solid fa-envelope"></i>
                        infor@company.com
                    </li>
                    <li>
                        <i class="fa-solid fa-phone-flip"></i>
                        010-020-0340
                    </li>
                </div>
                <div className='content-right'>
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
                        <i class="fa-brands fa-linkedin"></i>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Header;