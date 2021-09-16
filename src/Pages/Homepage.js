import {Container} from "react-bootstrap";
import HashLoader from 'react-spinners/HashLoader';
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
            // user : this.props.firstName
            spinner: true,
            show: false
        }
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                spinner: false,
                show: true
            })
        }, 2700)
    }

    render(props) {
        return(
            <>
                {this.state.spinner ? 
                    <div className="cliploader-div d-flex justify-content-center align-items-center">
                        <HashLoader className="cliploader" size={80} color={"0f0"} />   
                    </div>
                : null}

                    <div style={{ display: this.state.show ? "block" : "none" }}>
                        <div id="home">
                            <UpperNavBar />
                            <MainNavBar />
                            <SearchBar />
                            <MainCover />
                            <Benificts />
                                {/* <PopularItems /> */}
                                <OurProducts />
                            <AboutUs />
                            <Container className="d-flex justify-content-center">
                                <img className="organic" src={Organic} alt="shop"/>
                            </Container>
                            {/* <GoUp /> */}
                            <Footer /> 
                        </div>
                    </div>
                
            </>
        );
    }
    
}

export default Homepage;