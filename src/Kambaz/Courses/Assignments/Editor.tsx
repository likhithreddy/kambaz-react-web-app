import { Col, Form, Row } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <Form id="wd-assignments-editor">
            <Form.Group as={Col} controlId="formAssignmentName">
                <Form.Label>Assignment Name</Form.Label>
                <Form.Control type="text" placeholder="A1" value="A1" />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formAssignmentDescription">
                <Form.Control as="textarea" rows={10} cols={50} value={`The assignment is available online. \n\nSubmit a link to the landing page ot your Web application running on Netlify. \n\nThe page should include the following: \nYour full name and section Links to each of the lab assignments. \nLink to the Kambaz application. \nLinks to all relevant source code repositories. \n\nThe Kambaz application Should include a link to navigate back to the landing page.`} />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formAssignmentPoints">
                <Form.Label column sm={2}>
                    Points
                </Form.Label>
                <Col sm={10}>
                    <Form.Control className="w-50" type="text" value={100} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formAssignmentGroup">
                <Form.Label column sm={2}>
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
                <Form.Label column sm={2}>
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
                <Form.Label column sm={2}>
                    Submission Type
                </Form.Label>
                <Col sm={10}>
                    <Form.Select className="w-50" >
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                    </Form.Select>
                </Col>
            </Form.Group>

            <table>

                <br />
                <tr>
                    <td align="right" valign="top" />
                    <td>
                        Online Entry Options<br />
                        <input type="checkbox" name="online-entry-options" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />
                        <input type="checkbox" name="online-entry-options" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />
                        <input type="checkbox" name="online-entry-options" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                        <input type="checkbox" name="online-entry-options" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                        <input type="checkbox" name="online-entry-options" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label><br />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label><br />
                        <input id="wd-assign-to" value="Everyone" />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top" />
                    <td>
                        <label htmlFor="wd-due-date">Due</label><br />
                        <input type="date" value="2024-05-13" id="wd-due-date" /><br />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top" />
                    <td>
                        <label htmlFor="wd-available-from">Available from</label><br />
                        <input type="date" value="2024-05-06" id="wd-available-from" /><br />
                    </td>
                    <td>
                        <label htmlFor="wd-available-until">Until</label><br />
                        <input type="date" value="2024-05-20" id="wd-available-until" /><br />
                    </td>
                </tr>
            </table>
            <button id="wd-cancel">Cancel</button>&nbsp;&nbsp;<button id="wd-save">Save</button>
        </Form>
    );
}
