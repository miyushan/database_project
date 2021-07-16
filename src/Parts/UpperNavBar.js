import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/UpperNavBar.css';
import {Navbar, Container, Button} from "react-bootstrap";
import { ReactComponent as SignOut } from '../files/sign-out-alt-solid.svg';


function UpperNavBar(){
    return(
        <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Brand className="nav-title-1" style={{textAlign:"left"}}>Kochchikade</Navbar.Brand>
                <Navbar.Brand className="nav-title-1" style={{textAlign:"center"}}>Welcome Mr. Shakeer Miyushan</Navbar.Brand>
                <Navbar.Brand className="nav-title-1" style={{textAlign:"right"}}>
                    <Button>
                        <SignOut className="sign-out-btn" height="12px"/>Log Out
                    </Button>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default UpperNavBar;


