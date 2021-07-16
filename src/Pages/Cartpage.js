import UpperNavBar from '../Parts/UpperNavBar';
import MainNavBar from '../Parts/MainNavBar';
import CartItems from '../Parts/CartItems';

function Loginpage(){
    return(
        <>
            <div id="cart">
                <UpperNavBar />
                <MainNavBar />
                <CartItems />
            </div>
        </>
    );
}

export default Loginpage;