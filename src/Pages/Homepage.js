import {Container} from "react-bootstrap";
import React, { Component} from 'react';
import MainNavBar from '../Parts/MainNavBar';
import UpperNavBar from '../Parts/UpperNavBar';
import SearchBar from '../Parts/SearchBar';
import MainCover from '../Parts/MainCover';
import Benificts from '../Parts/Benificts';
import PopularItems from '../Parts/PopularItems';
import OurProducts from '../Parts/OurProducts';
import AboutUs from '../Parts/AboutUs';
import Footer from '../Parts/Footer';
import '../Pages/Homepage.css';

import Organic from '../files/organicFoods.png';

class Homepage extends Component {

    constructor(props) {
        super(props);

        this.state={
            user : this.props.firstName
        }
    }


    render() {
        console.log(this.state.user);
        return(
            <>
                <div id="home">
                    <UpperNavBar />
                    <MainNavBar />
                    <SearchBar />
                    <MainCover />
                    <Benificts />
                    <PopularItems />
                    <OurProducts />
                    <AboutUs />
                    <Container className="d-flex justify-content-center">
                        <img className="organic" src={Organic} alt="shop"/>
                    </Container>
                    {/* <GoUp /> */}
                    <Footer />
                    
                    
                </div>
            </>
        );
    }
    
}

export default Homepage;