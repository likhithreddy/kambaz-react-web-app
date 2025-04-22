import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as quizzesClient from "./client";
import { useSelector } from "react-redux";

export default function QuizPreview() {
  const { qid, cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any>({});
  const [attempts, setAttempts] = useState<any[]>([]);
  const [currentAttempt, setCurrentAttempt] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const q = await quizzesClient.getQuizById(qid!);
      const qs = await quizzesClient.getQuestions(qid!);
      const a = await quizzesClient.getAttempts(qid!);
      setQuiz(q);
      setQuestions(qs);
      setAttempts(a);
      //   setCurrentAttempt(a[0]); // most recent attempt
      const allowed = q.multipleAttempts ? q.howManyAttempts || 1 : 1;

      if (a.length < allowed) {
        setCurrentAttempt(null);
      } else {
        setCurrentAttempt(a[0]);
      }
    };
    load();
  }, [qid]);

  const handleChange = (qid: string, value: any) => {
    setAnswers({ ...answers, [qid]: value });
  };

  const handleSubmit = async () => {
    if (attempts.length >= (quiz.howManyAttempts || 1)) {
      alert("You've reached the max number of attempts.");
      return;
    }

    const a = await quizzesClient.submitAttempt(qid!, answers);
    setAttempts([a, ...attempts]);
    setCurrentAttempt(a);
    setAnswers({}); // clear form
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentAttempt(null);
  };

  if (!quiz || questions.length === 0) return <div>Loading...</div>;

  if (currentUser?.role !== "FACULTY" && !quiz.published) {
    return (
      <div className="container mt-4">
        <h2>{quiz.title}</h2>
        <div className="alert alert-warning">
          This quiz is not published yet.
        </div>
      </div>
    );
  }

  const now = new Date();
  const availableFrom = quiz.availableFrom
    ? new Date(quiz.availableFrom)
    : null;
  const availableUntil = quiz.availableUntil
    ? new Date(quiz.availableUntil)
    : null;

  if (
    currentUser?.role !== "FACULTY" &&
    ((availableFrom && now < availableFrom) ||
      (availableUntil && now > availableUntil))
  ) {
    return (
      <div className="container mt-4">
        <h2>{quiz.title}</h2>
        <div className="alert alert-info">
          This quiz is not currently available.
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <Link
        to={`/Kambaz/Courses/${cid}/Quizzes`}
        className="btn btn-secondary mb-3"
      >
        ← Back to Quizzes
      </Link>

      <h2>{quiz.title}</h2>

      {attempts.length > 0 && (
        <div className="mb-4">
          <h5>Previous Attempts</h5>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {attempts.map((a, index) => (
                <tr key={a._id}>
                  <td>{attempts.length - index}</td>
                  <td>{new Date(a.submittedAt).toLocaleString()}</td>
                  <td>{a.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {quiz.multipleAttempts && (
        <div className="text-muted">
          You’ve used {attempts.length} of {quiz.howManyAttempts || 1} attempts.
        </div>
      )}

      <div className="mt-3">
        {questions.map((q, i) => {
          const submitted = currentAttempt?.answers?.find(
            (a: any) => a.questionId === q._id
          );
          const isCorrect = submitted?.correct;
          const answerValue = currentAttempt
            ? submitted?.answer
            : answers[q._id];

          return (
            <div key={q._id} className="mb-4 border p-3 rounded">
              <h5>Question {i + 1}</h5>
              <p>{q.question}</p>

              {q.type === "MULTIPLE_CHOICE" &&
                q.choices.map((c: any, idx: number) => (
                  <div className="form-check" key={idx}>
                    <input
                      type="radio"
                      name={q._id}
                      disabled={!!currentAttempt}
                      checked={answerValue === c.text}
                      onChange={() => handleChange(q._id, c.text)}
                      className="form-check-input"
                    />
                    <label className="form-check-label">
                      {c.text}
                      {currentAttempt && c.text === submitted?.answer && (
                        <span
                          className={`ms-2 ${
                            isCorrect ? "text-success" : "text-danger"
                          }`}
                        >
                          {isCorrect ? "✓" : "✗"}
                        </span>
                      )}
                    </label>
                  </div>
                ))}

              {q.type === "TRUE_FALSE" &&
                ["True", "False"].map((val) => (
                  <div className="form-check" key={val}>
                    <input
                      type="radio"
                      name={q._id}
                      disabled={!!currentAttempt}
                      checked={answerValue === (val === "True")}
                      onChange={() => handleChange(q._id, val === "True")}
                      className="form-check-input"
                    />
                    <label className="form-check-label">
                      {val}
                      {currentAttempt &&
                        (val === "True") === submitted?.answer && (
                          <span
                            className={`ms-2 ${
                              isCorrect ? "text-success" : "text-danger"
                            }`}
                          >
                            {isCorrect ? "✓" : "✗"}
                          </span>
                        )}
                    </label>
                  </div>
                ))}

              {q.type === "FILL_BLANK" && (
                <div>
                  <input
                    type="text"
                    disabled={!!currentAttempt}
                    value={answerValue || ""}
                    onChange={(e) => handleChange(q._id, e.target.value)}
                    className="form-control"
                  />
                  {currentAttempt && (
                    <div className="mt-2">
                      {isCorrect ? (
                        <span className="text-success">✓ Correct</span>
                      ) : (
                        <span className="text-danger">✗ Incorrect</span>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* {!currentAttempt && (
        <button className="btn btn-success mt-3" onClick={handleSubmit}>
          Submit Quiz
        </button>
      )} */}

      {currentAttempt ? (
        attempts.length <
          (quiz.multipleAttempts ? quiz.howManyAttempts || 1 : 1) && (
          <button className="btn btn-warning mt-3" onClick={handleRetake}>
            Retake Quiz
          </button>
        )
      ) : (
        <button className="btn btn-success mt-3" onClick={handleSubmit}>
          Submit Quiz
        </button>
      )}
    </div>
  );
}
