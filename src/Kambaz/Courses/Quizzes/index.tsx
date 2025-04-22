import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setQuizzes, addQuiz, deleteQuiz, toggleQuizPublish } from "./reducer";
import * as quizzesClient from "./client";
import QuizControls from "./QuizControls";
import QuizCard from "./QuizCard";

export default function Quizzes() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { quizzes } = useSelector((state: any) => state.quizReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchQuizzes = async () => {
    const data = await quizzesClient.findQuizzesForCourse(cid!);
    dispatch(setQuizzes(data));
  };

  const handleAdd = async () => {
    const newQuiz = await quizzesClient.createQuiz(cid!);
    dispatch(addQuiz(newQuiz));
  };

  const handleDelete = async (id: string) => {
    await quizzesClient.deleteQuiz(id);
    dispatch(deleteQuiz(id));
  };

  const handleTogglePublish = async (id: string) => {
    const updated = await quizzesClient.togglePublish(id);
    dispatch(toggleQuizPublish(updated));
  };

  useEffect(() => {
    fetchQuizzes();
  }, [cid]);

  const visibleQuizzes =
    currentUser?.role === "FACULTY"
      ? quizzes
      : quizzes.filter((q: any) => q.published);

  return (
    <div>
      {currentUser?.role === "FACULTY" && (
        <QuizControls addQuizHandler={handleAdd} />
      )}
      <br />
      <br />
      <br />
      <br />
      {visibleQuizzes.length === 0 ? (
        <p className="mt-4">No quizzes available.</p>
      ) : (
        visibleQuizzes.map((quiz: any) => (
          <QuizCard
            key={quiz._id}
            quiz={quiz}
            onDelete={handleDelete}
            onTogglePublish={handleTogglePublish}
          />
        ))
      )}
    </div>
  );
}
