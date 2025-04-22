import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as quizzesClient from "./client";
import { useSelector } from "react-redux";
import QuizSettingsForm from "./QuizSettingsForm";
import QuizMetadata from "./QuizMetadata";

export default function QuizDetails() {
  const { qid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [quiz, setQuiz] = useState<any>(null);

  const fetchQuiz = async () => {
    const data = await quizzesClient.getQuizById(qid!);
    setQuiz(data);
  };

  const saveQuiz = async (updated: any) => {
    const status = await quizzesClient.updateQuiz(updated);
    if (status.modifiedCount > 0) {
      setQuiz(updated);
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, [qid]);

  if (!quiz) return <div>Loading quiz...</div>;

  return (
    <div className="container mt-4">
      <Link
        to={`/Kambaz/Courses/${quiz.course}/Quizzes`}
        className="btn btn-secondary mb-3"
      >
        ← Back to Quizzes
      </Link>
      <h2>{quiz.title}</h2>
      {currentUser?.role === "FACULTY" ? (
        <QuizSettingsForm quiz={quiz} setQuiz={setQuiz} saveQuiz={saveQuiz} />
      ) : (
        <QuizMetadata quiz={quiz} />
      )}
      <Link
        to={`/Kambaz/Courses/${quiz.course}/Quizzes/${quiz._id}/edit`}
        className="btn btn-outline-primary my-2"
      >
        Edit Questions
      </Link>
    </div>
  );
}
