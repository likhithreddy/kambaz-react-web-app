import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api`;

const axiosWithCredentials = axios.create({ withCredentials: true });

export const createQuiz = async (courseId: string) => {
  const { data } = await axiosWithCredentials.post(
    `${QUIZZES_API}/courses/${courseId}/quizzes`
  );
  return data;
};

export const findQuizzesForCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${QUIZZES_API}/courses/${courseId}/quizzes`
  );
  return data;
};

export const deleteQuiz = async (quizId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${QUIZZES_API}/quizzes/${quizId}`
  );
  return data;
};

export const togglePublish = async (quizId: string) => {
  const { data } = await axiosWithCredentials.patch(
    `${QUIZZES_API}/quizzes/${quizId}/publish`
  );
  return data;
};
