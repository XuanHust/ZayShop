import Banner from './banner';
import Categories from './categories';
import './home.scss'
import Product from './product';


const Home = () => {
    return (
        <>
            <Banner />
            <Categories />
            <Product />
        </>
    )
}

export default Home;