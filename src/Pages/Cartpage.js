import UpperNavBar from '../Parts/UpperNavBar';
import MainNavBar from '../Parts/MainNavBar';
import CartItems from '../Parts/CartItems';
import Footer from '../Parts/Footer';
import ProductContextProvider from '../Context/ProductContext';

function Cartpage(props){
    return(
        <>
            <div id="cart">
                <UpperNavBar />
                <MainNavBar />
                <ProductContextProvider>
                    <CartItems handleAddProduct={props.handleAddProduct}/>
                </ProductContextProvider>
                <Footer />
            </div>
        </>
    );
}

export default Cartpage;