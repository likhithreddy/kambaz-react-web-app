import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (9)</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/reactjs.png" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> CS1234 React JS </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer
                                    </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1000/Home" className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/node.png" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> CS1000 Node JS </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer
                                    </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1001/Home" className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/angularjs.png" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> CS1001 Angular JS </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer
                                    </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1002/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/vuejs.png" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> CS1002 Vue JS </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer
                                    </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1003/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/expressjs.png" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> CS1003 Express JS </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer
                                    </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1004/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/mongodb.png" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> CS1004 Mongo DB </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer
                                    </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1005/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/aws.png" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> CS1005 AWS </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer
                                    </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1006/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/devops.jpeg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> CS1006 DevOps </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer
                                    </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1007/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/kubernetes.png" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> CS1007 Kubernetes </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer
                                    </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
