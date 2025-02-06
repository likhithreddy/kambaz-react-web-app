import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <Form.Group className="mb-3" controlId="formUserDetails">
                <Form.Control className="wd-user-credentials my-2" id="wd-username" placeholder="username" />
                <Form.Control className="wd-user-credentials my-2" id="wd-password" placeholder="password" type="password" />
            </Form.Group>
            <Button className="w-100" id="wd-signin-btn">
                <Link className="text-decoration-none text-white" to="/Kambaz/Dashboard">
                    Sign in
                </Link>
            </Button>
            <Link id="wd-signup-link" className="my-3" to="/Kambaz/Account/Signup">
                Sign up
            </Link>
        </div>
    );
}
