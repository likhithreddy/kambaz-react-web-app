import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { IoCaretDown } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import AssignmentsControls from "./AssignmentsControls";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";
import EachAssignmentControls from "./EachAssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
    const dispatch = useDispatch();
    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { assignments } = useSelector((state: any) => state.assignmentReducer);

    const handleDelete = (assignmentId: string) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this assignment?");
        if (confirmDelete) {
            dispatch(deleteAssignment(assignmentId));
        }
    };

    return (
        <div id="wd-assignments">
            {currentUser?.role === "FACULTY" && <AssignmentsControls />}
            <br /><br />
            <ListGroup className="rounded-0 my-3" id="wd-modules">
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
                                        {currentUser?.role === "FACULTY" && <FaTrash
                                            className="text-danger me-2"
                                            cursor={"pointer"}
                                            onClick={() => handleDelete(assignment._id)}
                                        />}
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        ))}
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}