import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/MainNavBar.css';
import {Navbar, Container} from "react-bootstrap";

function MainNavBar(){
    return(
        <Navbar className="outer-nav" expand="lg">
            <Container className="main-nav">
                <Navbar.Brand className="nav-title-2" href="#home">HOME</Navbar.Brand>
                <Navbar.Brand className="nav-title-2" href="#products">PRODUCTS</Navbar.Brand>
                <Navbar.Brand className="nav-title-2" href="#about-us">ABOUT US</Navbar.Brand>
                <Navbar.Brand className="nav-title-2" href="#contact-us">CONTACT US</Navbar.Brand>
                <Navbar.Brand className="nav-title-2" href="#branches">BRANCHES</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default MainNavBar;


