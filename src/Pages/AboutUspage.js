import React from 'react';
import UpperNavBar from '../Parts/UpperNavBar';
import MainNavBar from '../Parts/MainNavBar';
import Footer from '../Parts/Footer';


function AboutUspage(){
    return(
        <>
            <div id="about-us">
                <UpperNavBar />
                <MainNavBar />
                <h2 style={{height: '600px'}}>About Us</h2>
                <Footer />
            </div>
        </>
    );
}

export default AboutUspage;