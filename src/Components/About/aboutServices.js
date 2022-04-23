import './aboutServices.scss'

const AboutServices = () => {
    return(
        <div className='aboutService-container'>
            <div className='aboutService-content'>
                <div className='title'>
                    <h2>Our Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='services'>
                    <div className='service'>
                        <li><i class="fa-solid fa-truck"></i></li>
                        <p>Delivery Services</p>
                    </div>
                    <div className='service'>
                        <li><i class="fa-solid fa-arrow-right-arrow-left"></i></li>
                        <p>Shipping & Return</p>
                    </div>
                    <div className='service'>
                        <li><i class="fa-solid fa-percent"></i></li>
                        <p>Promotion</p>
                    </div>
                    <div className='service'>
                        <li><i class="fa-solid fa-user"></i></li>
                        <p>24 Hours Service</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutServices;