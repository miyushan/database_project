import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Benificts.css';
import { Navbar, Container } from "react-bootstrap";

import { ReactComponent as Fast } from '../Media/shipping-fast-solid.svg';
import { ReactComponent as Online } from '../Media/clock-solid.svg';
import { ReactComponent as Caring } from '../Media/award-solid.svg';
import { ReactComponent as Fresh } from '../Media/carrot-solid.svg';
import { ReactComponent as Quick } from '../Media/phone-solid.svg';


function Benificts() {
    return (
        <>

            <Navbar className="outer-benificts">
                <Container className="main-nav-2">
                    <Navbar.Brand className="nav-title-2 benificts"><Fast className="benifict-icon" /><div className="add-curser benifict-text">Fast Delivery</div></Navbar.Brand>
                    <Navbar.Brand className="nav-title-2 benificts"><Online className="benifict-icon" /><div className="add-curser benifict-text">24 * 7 Service</div></Navbar.Brand>
                    <Navbar.Brand className="nav-title-2 benificts"><Caring className="benifict-icon" /><div className="add-curser benifict-text">Friendly Customer Care</div></Navbar.Brand>
                    <Navbar.Brand className="nav-title-2 benificts"><Fresh className="benifict-icon" /><div className="add-curser benifict-text">Fresh Vegetables</div></Navbar.Brand>
                    <Navbar.Brand className="nav-title-2 benificts"><Quick className="benifict-icon" /><div className="add-curser benifict-text">Quick Response</div></Navbar.Brand>
                </Container>
            </Navbar>

        </>
    );
}

export default Benificts;