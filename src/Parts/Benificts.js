import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Benificts.css';
import {Navbar, Container} from "react-bootstrap";

import { ReactComponent as Fast } from '../files/shipping-fast-solid.svg';
import { ReactComponent as Online } from '../files/clock-solid.svg';
import { ReactComponent as Caring } from '../files/award-solid.svg';
import { ReactComponent as Fresh } from '../files/carrot-solid.svg';
import { ReactComponent as Quick } from '../files/phone-solid.svg';


function Benificts(){
    return(
        <>

            <Navbar className="outer-benificts">
                <Container className="main-nav-2">
                    <Navbar.Brand className="nav-title-2"><Fast className="benifict-icon"/><div className="add-curser benifict-text">Fast Delivery</div></Navbar.Brand>
                    <Navbar.Brand className="nav-title-2"><Online className="benifict-icon"/><div className="add-curser benifict-text">24 * 7 Service</div></Navbar.Brand>
                    <Navbar.Brand className="nav-title-2"><Caring className="benifict-icon"/><div className="add-curser benifict-text">Friendly Customer Care</div></Navbar.Brand> 
                    <Navbar.Brand className="nav-title-2"><Fresh className="benifict-icon"/><div className="add-curser benifict-text">Fresh Vegetables</div></Navbar.Brand>
                    <Navbar.Brand className="nav-title-2"><Quick className="benifict-icon"/><div className="add-curser benifict-text">Quick Response</div></Navbar.Brand>
                </Container>
            </Navbar>  

        </>
    );
}

export default Benificts;