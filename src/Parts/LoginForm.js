import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/LoginForm.css';

import {Form, Button} from "react-bootstrap";

function LoginForm(){
    return(
        <>
            <Form className="login-form">

                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Control className="login-input" type="text" placeholder="Phone Number" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className="login-input" type="password" placeholder="Password" />
                </Form.Group>

                <Button href="home" className="login-submit-btn login-input" type="submit" >LOG IN</Button>

            </Form>
        </>
    );
}

export default LoginForm;


