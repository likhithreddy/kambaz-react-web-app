import { Link, useParams } from "react-router";
import * as db from "../../Database";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import EachAssignmentControls from "./EachAssignmentControls";
import { useSelector } from "react-redux";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    return (
        <div id="wd-assignments">
            {currentUser?.role === "FACULTY" && <AssignmentsControls />}
            <br /><br />
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        {currentUser?.role === "FACULTY" && <AssignmentControlButtons />}
                    </div>
                    {assignments
                        .filter((assignment: any) => assignment.course === cid)
                        .map((assignment: any) => (
                            <ListGroup className="wd-assignment-list rounded-0" key={assignment._id}>
                                <ListGroup.Item className="wd-assignment-list-item d-flex align-items-center p-3 ps-1">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <MdOutlineAssignment className="text-success" />
                                    <div className="mx-3">
                                        <div className="wd-assignment-list-item-details">
                                            <Link
                                                to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                                                className="fs-5 fw-bold wd-assignment-link text-decoration-none text-black">
                                                {assignment.name}
                                            </Link>
                                        </div>
                                        <div className="wd-assignment-list-item-details fs-6 ">
                                            <span className="text-danger"> Multiple Modules </span> | <strong>Not available until</strong> {assignment.start_date} |
                                        </div>
                                        <div className="wd-assignment-list-item-details fs-6">
                                            <strong>Due</strong> {assignment.due_date} | {assignment.points} points
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        {currentUser?.role === "FACULTY" && <EachAssignmentControls />}
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        ))}
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}
