import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleEnrollment, toggleShowAllEnrollments } from "./reducer";

export default function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
        courses: any[];
        course: any;
        setCourse: (course: any) => void;
        addNewCourse: () => void;
        deleteCourse: (course: any) => void;
        updateCourse: () => void;
    }) {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments, showAllEnrollments } = useSelector((state: any) => state.enrollmentReducer);
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {currentUser?.role === "FACULTY" && (
                <>
                    <h5>
                        New Course
                        <button className="btn btn-primary float-end"
                            onClick={addNewCourse} id="wd-add-new-course-click">
                            Add
                        </button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>
                    </h5>
                    <br />
                    <input
                        value={course.name}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <textarea
                        value={course.description}
                        className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                    <hr />
                    <br />
                </>
            )}
            <h2 id="wd-dashboard-published">Published Courses ({courses.filter((course) => enrollments.some((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id)).length})</h2> <hr />
            {currentUser?.role === "STUDENT" && (<Button className="mb-3" onClick={() => dispatch(toggleShowAllEnrollments())}>Enrollments</Button>)}
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {courses
                        .filter((course) =>
                            showAllEnrollments ||
                            enrollments.some(
                                (enrollment: any) =>
                                    enrollment.user === currentUser._id &&
                                    enrollment.course === course._id
                            )
                        ).map((course) => {
                            const isEnrolled = enrollments.some(
                                (enrollment: any) =>
                                    enrollment.user === currentUser._id &&
                                    enrollment.course === course._id
                            );
                            return (
                                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                                    <Card>
                                        <Link to={`/Kambaz/Courses/${course._id}/Home`}
                                            className="wd-dashboard-course-link text-decoration-none text-dark" >
                                            <Card.Img src={course.img} variant="top" width="100%" height={160} />
                                            <Card.Body className="card-body">
                                                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                                    {course.name} </Card.Title>
                                                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                                    {course.description} </Card.Text>
                                                <Button variant="primary"> Go </Button>
                                                {currentUser?.role === "FACULTY" && (
                                                    <>
                                                        <button onClick={(event) => {
                                                            event.preventDefault();
                                                            deleteCourse(course._id);
                                                        }} className="btn btn-danger float-end"
                                                            id="wd-delete-course-click">
                                                            Delete
                                                        </button>
                                                        <button id="wd-edit-course-click"
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                setCourse(course);
                                                            }}
                                                            className="btn btn-warning me-2 float-end" >
                                                            Edit
                                                        </button>
                                                    </>
                                                )}
                                                {currentUser?.role === "STUDENT" && (<Button
                                                    variant={isEnrolled ? "danger" : "success"}
                                                    className="float-end me-2"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        dispatch(toggleEnrollment({ userId: currentUser._id, courseId: course._id }))
                                                    }}>
                                                    {isEnrolled ? "Unenroll" : "Enroll"}
                                                </Button>)}
                                            </Card.Body>
                                        </Link>
                                    </Card>
                                </Col>
                            )
                        })}
                </Row>
            </div>
        </div>
    );
}
