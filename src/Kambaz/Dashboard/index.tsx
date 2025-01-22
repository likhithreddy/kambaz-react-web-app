import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/reactjs.png" width={200} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1000/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/node.png" width={200} />
                        <div>
                            <h5> CS1000 Node JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1001/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/angularjs.png" width={200} />
                        <div>
                            <h5> CS1001 Angular JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1002/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/vuejs.png" width={200} />
                        <div>
                            <h5> CS1002 Vue JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1003/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/expressjs.png" width={200} />
                        <div>
                            <h5> CS1003 Express JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1004/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/mongodb.png" width={200} />
                        <div>
                            <h5> CS1004 Mongo DB </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1005/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/aws.png" width={200} />
                        <div>
                            <h5> CS1005 Amazon Web Services </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1006/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/devops.jpeg" width={200} />
                        <div>
                            <h5> CS1006 DevOps </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1007/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/kubernetes.png" width={200} />
                        <div>
                            <h5> CS1007 Kubernetes </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
}
