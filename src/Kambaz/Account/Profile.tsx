import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <Form>
                <Form.Group className="my-2" controlId="formUsername">
                    <Form.Control type="text" id="wd-username" defaultValue="likhith" placeholder="Username" />
                </Form.Group>
                <Form.Group className="my-2" controlId="formPassword">
                    <Form.Control type="password" defaultValue="1234325" placeholder="Password" />
                </Form.Group>
                <Form.Group className="my-2" controlId="formFirstName">
                    <Form.Control type="text" defaultValue="Likhith" placeholder="First Name" />
                </Form.Group>
                <Form.Group className="my-2" controlId="formLastName">
                    <Form.Control type="text" defaultValue="Rechintala" placeholder="Last Name" />
                </Form.Group>
                <Form.Group className="my-2" controlId="formDOB">
                    <Form.Control type="date" defaultValue="2001-05-21" />
                </Form.Group>
                <Form.Group className="my-2" controlId="formEmail">
                    <Form.Control type="email" defaultValue="rechintala.l@northeastern.edu" placeholder="Email" />
                </Form.Group>
                <Form.Group className="my-2" controlId="formRole">
                    <Form.Select defaultValue="STUDENT">
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </Form.Select>
                </Form.Group>
                <Link to="/Kambaz/Account/Signin">
                    <Button variant="danger" type="button" className="w-100">
                        Sign out
                    </Button>
                </Link>
            </Form>
        </div>
    );
}