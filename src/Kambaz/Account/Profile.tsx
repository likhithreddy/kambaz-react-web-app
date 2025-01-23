import { Link } from "react-router-dom";
export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <input defaultValue="likhith" placeholder="username" className="wd-username" /><br />
            <input defaultValue="123" placeholder="password" type="password"
                className="wd-password" /><br />
            <input defaultValue="Likhith" placeholder="First Name" id="wd-firstname" /><br />
            <input defaultValue="Rechintala" placeholder="Last Name" id="wd-lastname" /><br />
            <input defaultValue="2001-05-21" type="date" id="wd-dob" /><br />
            <input defaultValue="rechintala.l@northeastern.edu" type="email" id="wd-email" /><br />
            <select defaultValue="STUDENT" id="wd-role">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select><br />
            <Link to="/Kambaz/Account/Signin" >Sign out</Link>
        </div>
    );
}
