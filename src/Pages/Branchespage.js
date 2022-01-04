// import UpperNavBar from '../Parts/UpperNavBar';
import React, { useEffect } from 'react';
import MainNavBar from '../Parts/MainNavBar';
import Footer from '../Parts/Footer';

function Branchespage(){

    useEffect(() => {
        document.getElementsByClassName('nav-branch')[0].style.color = '#0f0';
    }, [])

    return(
        <>
            <div id="branches">
                {/* <UpperNavBar /> */}
                <MainNavBar />
                <h2 style={{height: '600px'}}>Branches</h2>
                <Footer />
            </div>
        </>
    );
}

export default Branchespage;