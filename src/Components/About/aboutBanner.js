import './aboutBanner.scss'
import aboutHero from "../Images/about-hero.svg"

const AboutBanner = () => {
    return (
        <div className='aboutBanner-container'>
            <div className='aboutBanner-content'>
                <div className='content-left'>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='content-right'>
                    <img src={aboutHero} alt='About Hero'></img>
                </div>
            </div>
        </div>
    )
}
export default AboutBanner;