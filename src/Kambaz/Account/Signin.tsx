import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <Form.Group className="mb-3" controlId="formUserDetails">
                <Form.Control className="wd-user-credentials my-2" id="wd-username" placeholder="username" />
                <Form.Control className="wd-user-credentials my-2" id="wd-password" placeholder="password" type="password" />
            </Form.Group>
            <Link
                id="wd-signin-btn"
                to="/Kambaz/Dashboard"
                className="btn btn-primary w-100 mb-2"
            >
                Sign in
            </Link>
            <Link id="wd-signup-link" className="my-3" to="/Kambaz/Account/Signup">
                Sign up
            </Link>
        </div>
    );
}
