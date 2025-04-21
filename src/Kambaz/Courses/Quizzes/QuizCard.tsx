import { FaTrash, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

export default function QuizCard({
  quiz,
  onDelete,
  onTogglePublish,
}: {
  quiz: any;
  onDelete: (id: string) => void;
  onTogglePublish: (id: string) => void;
}) {
  return (
    <div className="border p-3 rounded mb-2 d-flex justify-content-between align-items-center">
      <div>
        <div className="fw-bold">{quiz.title}</div>
        <div className="text-muted">
          {quiz.published ? "✅ Published" : "🚫 Unpublished"}
        </div>
      </div>
      <div>
        <span
          className="me-3 text-primary"
          role="button"
          onClick={() => onTogglePublish(quiz._id)}
        >
          {quiz.published ? <FaCheckCircle /> : <FaTimesCircle />}
        </span>
        <FaTrash
          className="text-danger me-3"
          role="button"
          onClick={() => onDelete(quiz._id)}
        />
        <IoEllipsisVertical />
      </div>
    </div>
  );
}
