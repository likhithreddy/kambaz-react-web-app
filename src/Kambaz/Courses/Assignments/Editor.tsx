import { Link, useParams } from "react-router";
import * as db from "../../Database";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = db.assignments.find((assignment: any) => assignment._id === aid);
    return (
        <Form id="wd-assignments-editor">
            <Form.Group as={Col} controlId="formAssignmentName">
                <Form.Label>Assignment Name</Form.Label>
                <Form.Control type="text" className="w-75" placeholder="A1" value={assignment?.name} />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formAssignmentDescription">
                <Form.Control as="textarea" className="w-75" rows={10} cols={50} value={assignment?.description} />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formAssignmentPoints">
                <Form.Label column sm={2} className="d-flex justify-content-end">
                    Points
                </Form.Label>
                <Col sm={10}>
                    <Form.Control className="w-50" type="text" value={assignment?.points} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formAssignmentGroup">
                <Form.Label column sm={2} className="d-flex justify-content-end">
                    Assignment Group
                </Form.Label>
                <Col sm={10}>
                    <Form.Select className="w-50" >
                        <option value="assignments">ASSIGNMENTS</option>
                        <option value="quizzes">QUIZZES</option>
                        <option value="exams">EXAMS</option>
                        <option value="project">PROJECT</option>
                    </Form.Select>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formAssignmentGradeDisplay">
                <Form.Label column sm={2} className="d-flex justify-content-end">
                    Display Grade as
                </Form.Label>
                <Col sm={10}>
                    <Form.Select className="w-50" >
                        <option value="percentage">Percentage</option>
                        <option value="points">Points</option>
                    </Form.Select>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formAssignmentSubmissionType">
                <Form.Label column sm={2} className="d-flex justify-content-end">
                    Submission Type
                </Form.Label>
                <Col sm={10} className="border border-secondary w-50 rounded-3 p-3">
                    <Form.Select>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                    </Form.Select>
                    <Form.Group as={Row} className="my-2" controlId="formAssignmentOnlineEntryOptions">
                        <Form.Label column className="fw-bold">
                            Online Entry Options
                        </Form.Label>
                        <Form.Check type="checkbox" id="wd-text-entry" className="m-3" label="Text Entry" />
                        <Form.Check type="checkbox" id="wd-website-url" className="m-3" label="Website URL" />
                        <Form.Check type="checkbox" id="wd-media-recordings" className="m-3" label="Media Recordings" />
                        <Form.Check type="checkbox" id="wd-student-annotation" className="m-3" label="Student Annotation" />
                        <Form.Check type="checkbox" id="wd-file-upload" className="m-3" label="File Uploads" />

                    </Form.Group>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formAssignmentAssignTo">
                <Form.Label column sm={2} className="d-flex justify-content-end">
                    Assign
                </Form.Label>
                <Col sm={10} className="border border-secondary w-50 rounded-3 p-3">
                    <Form.Group className="mb-3" controlId="formAssignmentAssignTo">
                        <Form.Label column>
                            Assign To
                        </Form.Label>
                        <Form.Control type="text" value="Everyone" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAssignmentDueDate">
                        <Form.Label column>
                            Due
                        </Form.Label>
                        <Form.Control type="date" value={assignment?.due_date} />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col>
                            <Form.Group className="mb-3" controlId="formAssignmentAvailableFrom">
                                <Form.Label>
                                    Available from
                                </Form.Label>
                                <Form.Control type="date" value={assignment?.start_date} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formAssignmentAvailableUntil">
                                <Form.Label>
                                    Until
                                </Form.Label>
                                <Form.Control type="date" value="2024-05-20" />
                            </Form.Group>
                        </Col>
                    </Form.Group>
                </Col>
            </Form.Group>

            <br />
            <div className="d-flex justify-content-end w-75">
                <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="wd-assignment-link d-block">
                    <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                        Save
                    </Button>
                </Link>
                <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="wd-assignment-link d-block">
                    <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                        Cancel
                    </Button>
                </Link>
            </div>
        </Form>
    );
}
