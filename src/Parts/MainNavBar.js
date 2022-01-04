import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/MainNavBar.css';
import {Navbar, Container, Col} from "react-bootstrap";

function MainNavBar(){
    const[scroll, setScroll] = useState(true);

    const style = {
        backgroundColor : "#202020ee",
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
            <Container className="main-nav d-flex justify-content-center align-items-center">
                    <Col className="text-left down-col d-flex align-items-start">
                        <div><a className="header-brand-name" href="/home">VegiDeals</a></div>
                    </Col>
                    <Col className="main-nav-items d-flex justify-content-end align-items-center m-0 p-0">
                        <Navbar.Brand className="nav-title-2 nav-home" href="home">HOME</Navbar.Brand>
                        <Navbar.Brand className="nav-title-2 nav-products" href="products">PRODUCTS</Navbar.Brand>
                        <Navbar.Brand className="nav-title-2 nav-cart" href="cart">CART</Navbar.Brand>
                        <Navbar.Brand className="nav-title-2 nav-about" href="about-us">ABOUT US</Navbar.Brand>
                        <Navbar.Brand className="nav-title-2 nav-contact" href="contact-us">CONTACT US</Navbar.Brand>
                        <Navbar.Brand className="nav-title-2 nav-branch" href="branches">BRANCHES</Navbar.Brand>
                    </Col>
                    {/* <Col className="d-flex justify-content-end align-items-center"> */}
                        {/* <div className="cart to-cart-btn">
                            <Button href="cart" className="ignore-btn" variant="success"><Cart className="cart-icon" height="35px"/></Button>
                            {cartProducts.length !== 0 ? <div>
                                <div className="cartProductExist"><div className="cartProductCountRel"></div></div>
                                <div className="cartProductCount">{cartProducts.length}</div>
                            </div> : null }
                        </div> */}
                    {/* </Col> */}
            </Container>    
        </Navbar>

    );
}

export default MainNavBar;
