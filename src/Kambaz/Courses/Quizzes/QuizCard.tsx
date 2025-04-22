import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function QuizCard({ quiz, onDelete, onTogglePublish }: any) {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="border p-3 rounded mb-2 d-flex justify-content-between align-items-center">
      <div>
        {/* Quiz Title Links to Quiz Details */}
        <Link
          to={
            currentUser?.role === "FACULTY"
              ? `/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/edit`
              : quiz.published
              ? `/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/preview`
              : "#"
          }
          className="fw-bold text-decoration-none"
        >
          {quiz.title}
        </Link>
        {currentUser?.role === "FACULTY" && (
          <div className="text-muted">
            {quiz.published ? "✅ Published" : "🚫 Unpublished"}
          </div>
        )}
      </div>

      <div className="d-flex align-items-center gap-3">
        {currentUser?.role === "FACULTY" && (
          <>
            <Link
              to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/edit`}
              className="btn btn-outline-secondary btn-sm me-2"
            >
              Edit Questions
            </Link>

            <span
              className="text-primary me-2"
              role="button"
              onClick={() => onTogglePublish(quiz._id)}
            >
              {quiz.published ? "🚫" : "✅"}
            </span>

            <span
              className="text-danger"
              role="button"
              onClick={() => onDelete(quiz._id)}
            >
              🗑
            </span>
          </>
        )}
      </div>
    </div>
  );
}
