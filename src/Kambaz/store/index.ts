import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import accountReducer from "../Account/reducer";
import assignmentReducer from "../Courses/Assignments/reducer";
import enrollmentReducer from "../Courses/Enrollments/reducer";
import coursesReducer from "../Courses/reducer";
import quizReducer from "../Courses/Quizzes/reducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    enrollmentReducer,
    coursesReducer,
    quizReducer,
  },
});
export default store;
