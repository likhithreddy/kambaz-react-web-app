import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <Form.Group className="mb-3" controlId="formUserDetails">
        <Form.Control
          defaultValue={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          className="wd-user-credentials my-2"
          id="wd-username"
          placeholder="username"
        />
        <Form.Control
          defaultValue={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="wd-user-credentials my-2"
          id="wd-password"
          placeholder="password"
          type="password"
        />
      </Form.Group>
      <Button
        onClick={signin}
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-2"
      >
        Sign in
      </Button>
      <Link id="wd-signup-link" className="my-3" to="/Kambaz/Account/Signup">
        Sign up
      </Link>

      <br />
      <br />
      <br />
      <br />
      <Container className="project-team-details">
        <h1>Project - Quizzes</h1>
        <h2>Team - KoRe</h2>
        <h3>Likhith Reddy Rechintala - Grad</h3>
        <h3>Jaya Sriharshita Koneti - Grad</h3>
        <br />
        <Link to="https://github.com/likhithreddy/kambaz-react-web-app.git">
          <h5>React Web App Github link</h5>
        </Link>
        <Link to="https://github.com/likhithreddy/kambaz-node-server-app.git">
          <h5>Node Server App Github link</h5>
        </Link>
      </Container>
    </div>
  );
}
