import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/MainNavBar.css';
import {Navbar, Container, Button} from "react-bootstrap";

import { ReactComponent as Cart } from '../files/shopping-cart-solid.svg';

function MainNavBar(){

    const[scroll, setScroll] = useState(true);

    const style = {
        backgroundColor : "#3b3737f8",
        // animation: "ease-out"

    }

    const onScroll = () => {
        // console.log(window.scrollY);
        if(window.scrollY>40){
            setScroll(true)
        }
        else{
            setScroll(false)
        }
    }
    window.addEventListener('scroll', onScroll);

    return(    
        <Navbar style={scroll ? style : null} className="outer-nav">
            <Container className="main-nav">
                <Navbar.Brand className="nav-title-2" href="home">HOME</Navbar.Brand>
                <Navbar.Brand className="nav-title-2" href="products">PRODUCTS</Navbar.Brand>
                <Navbar.Brand className="nav-title-2" href="about-us">ABOUT US</Navbar.Brand>
                <Navbar.Brand className="nav-title-2" href="contact-us">CONTACT US</Navbar.Brand>
                <Navbar.Brand className="nav-title-2" href="branches">BRANCHES</Navbar.Brand>
                <div className="cart to-cart-btn">
                    <Button href="cart" className="ignore-btn"  variant="success"><Cart className="cart-icon" height="18px"/></Button>
                </div>
            </Container>    
        </Navbar>

    );
}

export default MainNavBar;
