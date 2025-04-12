import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "./Courses/reducer";

export default function Kambaz() {
  const dispatch = useDispatch();
  const courses = useSelector((state: any) => state.coursesReducer.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    credits: 3,
    startDate: "2023-01-10",
    endDate: "2023-05-15",
    description: "New Description",
  });
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  //   const fetchCourses = async () => {
  //     try {
  //       const courses = await userClient.findMyCourses();
  //       // setCourses(courses);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   useEffect(() => {
  //     fetchCourses();
  //   }, [currentUser]);

  useEffect(() => {
    const loadCourses = async () => {
      const allCourses = await courseClient.fetchAllCourses();
      dispatch(setCourses(allCourses));
    };
    loadCourses();
  }, [currentUser]);

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    // setCourses([...courses, newCourse]);
    dispatch({ type: "courses/addCourse", payload: newCourse });
  };
  const deleteCourse = async (courseId: any) => {
    await courseClient.deleteCourse(courseId);
    // setCourses(courses.filter((course) => course._id !== courseId));
    dispatch({ type: "courses/deleteCourse", payload: courseId });
  };
  const updateCourse = async () => {
    const updatedCourse = await courseClient.updateCourse(course);
    dispatch({ type: "courses/updateCourse", payload: updatedCourse });
  };
  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />{" "}
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
