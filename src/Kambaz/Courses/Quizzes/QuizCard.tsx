import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaBan } from "react-icons/fa";

export default function QuizCard({
  quiz,
  onDelete,
  onTogglePublish,
  stats,
}: any) {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const now = new Date();
  const availableFrom = quiz.availableFrom
    ? new Date(quiz.availableFrom)
    : null;
  const availableUntil = quiz.availableUntil
    ? new Date(quiz.availableUntil)
    : null;
  const dueDate = quiz.dueDate ? new Date(quiz.dueDate) : null;

  let availabilityLabel = "Available";

  if (availableUntil && now > availableUntil) {
    availabilityLabel = "Closed";
  } else if (availableFrom && now < availableFrom) {
    availabilityLabel = `Not available until ${availableFrom.toLocaleString()}`;
  }

  const points = stats?.points ?? 0;
  const questionsCount = stats?.questions ?? 0;

  return (
    <div className="border-start border-success border-4 p-3 d-flex justify-content-between align-items-start">
      <div>
        <Link
          to={
            // currentUser?.role === "FACULTY"
            //   ? `/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/edit`
            //   : quiz.published
            //   ? `/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/preview`
            //   : "#"
            `/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`
          }
          className="fw-bold text-decoration-none text-danger"
        >
          {quiz.title}
        </Link>

        <div className="small">
          <strong>{availabilityLabel}</strong> |{" "}
          {dueDate && (
            <span>
              <strong>Due</strong> {dueDate.toLocaleString()}
            </span>
          )}{" "}
          | {points} pts | {questionsCount} Questions
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        {currentUser?.role === "FACULTY" && (
          <div className="d-flex justify-content-center align-items-center">
            <div
              className="text-primary"
              role="button"
              onClick={() => onTogglePublish(quiz._id)}
              title={quiz.published ? "Unpublish Quiz" : "Publish Quiz"}
              style={{ fontSize: "20px" }}
            >
              {quiz.published ? (
                <IoIosCheckmarkCircle className="text-success fs-4" />
              ) : (
                <FaBan className="text-danger fs-4" />
              )}
            </div>
            <div
              className="text-danger mx-4"
              role="button"
              onClick={() => onDelete(quiz._id)}
              title="Delete Quiz"
            >
              <MdDelete className="fs-4" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
