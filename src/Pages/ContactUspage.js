// import UpperNavBar from '../Parts/UpperNavBar';
import React, { useEffect } from 'react';
import MainNavBar from '../Parts/MainNavBar';
import Footer from '../Parts/Footer';

function ContactUspage(){

    useEffect(() => {
        document.getElementsByClassName('nav-contact')[0].style.color = '#0f0';
    }, [])
    
    return(
        <>
            <div id="contact-us">
                {/* <UpperNavBar /> */}
                <MainNavBar />
                <h2 style={{height: '600px'}}>Contact Us</h2>
                <Footer />
            </div>
        </>
    );
}

export default ContactUspage;