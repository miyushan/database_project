import UpperNavBar from '../Parts/UpperNavBar';
import MainNavBar from '../Parts/MainNavBar';
import CartItems from '../Parts/CartItems';
import Footer from '../Parts/Footer';

function Cartpage(){
    return(
        <>
            <UpperNavBar />
            <MainNavBar />
            <CartItems />
            <Footer />
        </>
    );
}

export default Cartpage;