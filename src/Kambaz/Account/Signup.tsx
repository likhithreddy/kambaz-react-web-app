import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <h3>Sign up</h3>
            <Form.Group className="mb-3" controlId="formUserDetails">
                <Form.Control className="wd-user-credentials my-2" id="wd-username" placeholder="username" />
                <Form.Control className="wd-user-credentials my-2" id="wd-password" placeholder="password" type="password" />
                <Form.Control className="wd-user-credentials my-2" id="wd-password-verify" placeholder="verify password" type="password" />
            </Form.Group>
            <Button className="w-100" id="wd-signup-btn">
                <Link className="text-decoration-none text-white" to="/Kambaz/Account/Profile" > Sign up </Link>
            </Button>
            <Link className="my-3" to="/Kambaz/Account/Signin" >Sign in</Link>
        </div>
    );
}

