import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import EachAssignmentControls from "./EachAssignmentControls";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentsControls /><br /><br />
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentControlButtons />
                    </div>
                    <ListGroup className="wd-assignment-list rounded-0">
                        <ListGroup.Item className="wd-assignment-list-item d-flex align-items-center p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdOutlineAssignment className="text-success" />
                            <div className="mx-3">
                                <div className="wd-assignment-list-item-details">
                                    <a href="#/Kambaz/Courses/1234/Assignments/123" className="fs-5 fw-bold wd-assignment-link text-decoration-none text-black" >
                                        A1
                                    </a>
                                </div>
                                <div className="wd-assignment-list-item-details fs-6 ">
                                    <span className="text-danger"> Multiple Modules </span> | <strong>Not available until</strong> May 6 at 12:00am |
                                </div>
                                <div className="wd-assignment-list-item-details fs-6">
                                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                                </div>
                            </div>
                            <div className="ms-auto">
                                <EachAssignmentControls />
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="wd-assignment-list rounded-0">
                        <ListGroup.Item className="wd-assignment-list-item d-flex align-items-center p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdOutlineAssignment className="text-success" />
                            <div className="mx-3">
                                <div className="wd-assignment-list-item-details">
                                    <a href="#/Kambaz/Courses/1234/Assignments/123" className="fs-5 fw-bold wd-assignment-link text-decoration-none text-black" >
                                        A2
                                    </a>
                                </div>
                                <div className="wd-assignment-list-item-details fs-6 ">
                                    <span className="text-danger"> Multiple Modules </span> | <strong>Not available until</strong> May 13 at 12:00am |
                                </div>
                                <div className="wd-assignment-list-item-details fs-6">
                                    <strong>Due</strong> May 20 at 11:59pm | 100 pts
                                </div>
                            </div>
                            <div className="ms-auto">
                                <EachAssignmentControls />
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="wd-assignment-list rounded-0">
                        <ListGroup.Item className="wd-assignment-list-item d-flex align-items-center p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdOutlineAssignment className="text-success" />
                            <div className="mx-3">
                                <div className="wd-assignment-list-item-details">
                                    <a href="#/Kambaz/Courses/1234/Assignments/123" className="fs-5 fw-bold wd-assignment-link text-decoration-none text-black" >
                                        A3
                                    </a>
                                </div>
                                <div className="wd-assignment-list-item-details fs-6 ">
                                    <span className="text-danger"> Multiple Modules </span> | <strong>Not available until</strong> May 20 at 12:00am |
                                </div>
                                <div className="wd-assignment-list-item-details fs-6">
                                    <strong>Due</strong> May 27 at 11:59pm | 100 pts
                                </div>
                            </div>
                            <div className="ms-auto">
                                <EachAssignmentControls />
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>

        </div>
    );
}
