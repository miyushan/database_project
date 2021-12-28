import React, { useState, useEffect } from 'react';
// import UpperNavBar from '../Parts/UpperNavBar';
import MainNavBar from '../Parts/MainNavBar';
import OurProducts from '../Parts/OurProducts';
import HashLoader from 'react-spinners/HashLoader';
import Footer from '../Parts/Footer';

import '../Pages/Productspage.css';

function Productspage(){

    const [spinner, setSpinner] = useState(true);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
            setShow(true);
        }, 2700)
    },[])

    return(
        <>  
            {spinner ? 
                <div className="cliploader-div d-flex justify-content-center align-items-center">
                    <HashLoader className="cliploader" size={80} color={"0f0"} />   
                </div>
            : null}
            <div style={{ display: show ? "block" : "none" }}>
                <div id="products">
                    {/* <UpperNavBar /> */}
                    <MainNavBar />
                        <OurProducts/>
                    <Footer />
                </div>
            </div>
        </>
    );
 

}

export default Productspage;