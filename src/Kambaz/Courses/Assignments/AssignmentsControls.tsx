import { FaPlus } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { Button, InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
export default function AssignmentsControls() {
    return (
        <div id="wd-assignments-controls" className="text-nowrap">
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
                <FaPlus className="position-relative me-2" />
                Assignment
            </Button>
            <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-add-assignment-group">
                <FaPlus className="position-relative me-2" />
                Group
            </Button>
            <InputGroup style={{ width: "400px" }} className="mb-2">
                <InputGroup.Text><FiSearch /></InputGroup.Text>
                <Form.Control size="lg" type="text" className="me-2 float-end" placeholder="Search..." id="wd-search-assignment" />
            </InputGroup>
        </div>
    );
}
