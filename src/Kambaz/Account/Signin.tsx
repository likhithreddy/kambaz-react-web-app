import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <Form.Group className="mb-3" controlId="formAssignmentAvailableUntil">
                <Form.Control className="wd-username" placeholder="username" />
                <Form.Control className="wd-password" placeholder="password" type="password" />
            </Form.Group>
            <Button id="wd-signin-btn">
                <Link className="text-decoration-none text-white" to="/Kambaz/Dashboard">
                    Sign in
                </Link>
            </Button>
            <br />
            <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
                Sign up
            </Link>

        </div>
    );
}
