import UpperNavBar from '../Parts/UpperNavBar';
import MainNavBar from '../Parts/MainNavBar';
import OurProducts from '../Parts/OurProducts';
import Footer from '../Parts/Footer';

function Productspage(){
    return(
        <>
            <div id="products">
                <UpperNavBar />
                <MainNavBar />
                <OurProducts />
                <Footer />
            </div>
        </>
    );
}

export default Productspage;