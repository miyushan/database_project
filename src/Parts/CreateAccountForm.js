import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CreateAccountForm.css';
import {Form, Button} from "react-bootstrap";
// import FloatingLabel from "react-bootstrap-floating-label";

function CreateAccountForm(){
    return(
        <>
            <Form className="login-form">

                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Control className="login-input" type="text" placeholder="First name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Control className="login-input" type="text" placeholder="Last name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                {/* <FloatingLabel controlId="floatingSelect" label="Works with selects">
                    <Form.Select aria-label="Floating label select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FloatingLabel> */}

                <Form.Group className="mb-3" controlId="formBasicGender">
                    <Form.Control className="login-input" type="text" placeholder="Gender" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Control className="login-input" type="text" placeholder="Phone Number" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicBranchName">
                    <Form.Control className="login-input" type="text" placeholder="Branch Name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className="login-input" type="password" placeholder="Password" />
                </Form.Group>

                <Button href="home" className="login-submit-btn login-input" type="submit">CREATE ACCOUNT</Button>

            </Form>
        </>
    );
}

export default CreateAccountForm;


