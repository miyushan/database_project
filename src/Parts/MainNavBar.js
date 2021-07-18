import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/MainNavBar.css';
import {Navbar, Container, Button} from "react-bootstrap";

import { ReactComponent as Cart } from '../files/shopping-cart-solid.svg';

function MainNavBar(){
    return(
        <Navbar className="outer-nav">
            <Container className="main-nav">
                <Navbar.Brand className="nav-title-2" href="home">HOME</Navbar.Brand>
                <Navbar.Brand className="nav-title-2" href="products">PRODUCTS</Navbar.Brand>
                <Navbar.Brand className="nav-title-2" href="about-us">ABOUT US</Navbar.Brand>
                <Navbar.Brand className="nav-title-2" href="contact-us">CONTACT US</Navbar.Brand>
                <Navbar.Brand className="nav-title-2" href="branches">BRANCHES</Navbar.Brand>
                <div className="cart">
                    <Button href="cart" className="ignore-btn"><Cart href="cart" className="sign-out-btn" height="18px"/></Button>
                </div>
            </Container>
        </Navbar>
    );
}

export default MainNavBar;
