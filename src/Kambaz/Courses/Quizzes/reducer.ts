import { createSlice } from "@reduxjs/toolkit";

type Quiz = {
  _id: string;
  title: string;
  published: boolean;
  course: string;
};

const initialState: { quizzes: Quiz[] } = {
  quizzes: [],
};

const quizSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, { payload }) => {
      state.quizzes = payload;
    },
    addQuiz: (state, { payload }) => {
      state.quizzes.unshift(payload);
    },
    deleteQuiz: (state, { payload }) => {
      state.quizzes = state.quizzes.filter((q) => q._id !== payload);
    },
    toggleQuizPublish: (state, { payload }) => {
      state.quizzes = state.quizzes.map((q) =>
        q._id === payload._id ? payload : q
      );
    },
  },
});

export const { setQuizzes, addQuiz, deleteQuiz, toggleQuizPublish } =
  quizSlice.actions;
export default quizSlice.reducer;
