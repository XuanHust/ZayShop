import './aboutBrands.scss'
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import levi from "../Images/brand_01.png"
import adidas from "../Images/brand_02.png"
import nike from "../Images/brand_03.png"
import hm from "../Images/brand_04.png"


const AboutBrands = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                arrows: false
              }
            }
          ]
    };

    return (
        <div className='aboutBrands-container'>
            <div className='aboutBrands-content'>
                <div className='title'>
                    <h2>Our Brands</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='brands'>
                    <Slider {...settings}>
                        <div className='brand'>
                            <img src={levi} alt='Levi'></img>
                        </div>
                        <div className='brand'>
                            <img src={adidas} alt='Adidas'></img>
                        </div>
                        <div className='brand'>
                            <img src={nike} alt='Nike'></img>
                        </div>
                        <div className='brand'>
                            <img src={hm} alt='H&M'></img>
                        </div>
                        <div className='brand'>
                            <img src={levi} alt='Levi'></img>
                        </div>
                        <div className='brand'>
                            <img src={adidas} alt='Adidas'></img>
                        </div>
                        <div className='brand'>
                            <img src={nike} alt='Nike'></img>
                        </div>
                        <div className='brand'>
                            <img src={hm} alt='H&M'></img>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default AboutBrands;