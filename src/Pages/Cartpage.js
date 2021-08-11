import UpperNavBar from '../Parts/UpperNavBar';
import MainNavBar from '../Parts/MainNavBar';
import CartItems from '../Parts/CartItems';
import Footer from '../Parts/Footer';

function Cartpage(props){
    return(
        <>
            <div id="cart">
                <UpperNavBar />
                <MainNavBar />
                <CartItems cartItems={props.cartItems} handleAddProduct={props.handleAddProduct}/>
                <Footer />
            </div>
        </>
    );
}

export default Cartpage;