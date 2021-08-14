import UpperNavBar from '../Parts/UpperNavBar';
import MainNavBar from '../Parts/MainNavBar';
import CartItems from '../Parts/CartItems';
import Footer from '../Parts/Footer';
import CartContextProvider from '../Context/CartContext';

function Cartpage(props){
    return(
        <>
            <div id="cart">
                <UpperNavBar />
                <MainNavBar />
                <CartContextProvider>
                    <CartItems handleAddProduct={props.handleAddProduct}/>
                </CartContextProvider>
                <Footer />
            </div>
        </>
    );
}

export default Cartpage;