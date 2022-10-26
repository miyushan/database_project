// import UpperNavBar from '../Parts/UpperNavBar';
import React, { useEffect } from 'react';
import MainNavBar from '../Parts/MainNavBar';
import CartItems from '../Parts/CartItems';
import Footer from '../Parts/Footer';

function Cartpage(){

    useEffect(() => {
        document.getElementsByClassName('nav-cart')[0].style.color = '#0f0';
    }, [])
    return(
        <>
            {/* <UpperNavBar /> */}
            <MainNavBar />
            <CartItems />
            <Footer />
        </>
    );
}

export default Cartpage;