import './about.scss'
import AboutBanner from './aboutBanner';
import AboutBrands from './aboutBrands';
import AboutServices from './aboutServices';

const About = () => {
    return (
        <>
            <AboutBanner />
            <AboutServices />
            <AboutBrands />
        </>
    )
}

export default About;