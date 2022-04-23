import './banner.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../Images/banner_img_01.jpg"
import banner2 from "../Images/banner_img_02.jpg"
import banner3 from "../Images/banner_img_03.jpg"

const Banner = () => {

    let settings = {
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };
    return (
        <div className='banner-container'>
            <div className='banner-content'>
                <Slider {...settings}>
                    <div className='banner-content1'>
                        <div className='content-des1'>
                            <h2><span>Zay</span> eCommerce</h2>
                            <h3>Tiny and Perfect eCommerce Template</h3>
                            <p>Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by <span>TemplateMo</span> website. Image credits go to <span>Freepik Stories</span>, <span>Unsplash</span> and <span>Icons 8</span>.</p>
                        </div>
                        <div className='content-img1'>
                            <img src={banner1} alt='banner1'></img>
                        </div>
                    </div>
                    <div className='banner-content2'>
                        <div className='content-des2'>
                            <h2>Proident occaecat</h2>
                            <h3>Aliquip ex ea commodo consequat</h3>
                            <p>You are permitted to use this Zay CSS template for your commercial websites. You are <span>not permitted</span> to re-distribute the template ZIP file in any kind of template collection websites.</p>
                        </div>
                        <div className='content-img2'>
                            <img src={banner2} alt='banner2'></img>
                        </div>
                    </div>
                    <div className='banner-content2'>
                        <div className='content-des2'>
                            <h2>Repr in voluptate</h2>
                            <h3>Ullamco laboris nisi ut</h3>
                            <p>We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.</p>
                        </div>
                        <div className='content-img2'>
                            <img src={banner3} alt='banner3'></img>
                        </div>
                    </div>
                </Slider>
            </div>

        </div>
    )
}

export default Banner;