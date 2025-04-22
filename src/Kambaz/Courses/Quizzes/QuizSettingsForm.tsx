import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QuizSettingsForm({ quiz, setQuiz, saveQuiz }: any) {
  const navigate = useNavigate();
  const [localQuiz, setLocalQuiz] = useState({ ...quiz });

  const update = (field: string, value: any) => {
    setLocalQuiz({ ...localQuiz, [field]: value });
  };

  const handleSave = async (publish = false) => {
    const updated = { ...localQuiz, published: publish };
    await saveQuiz(updated);
    setQuiz(updated);
    if (publish) {
      navigate(`/Kambaz/Courses/${quiz.course}/Quizzes`);
    } else {
      navigate(`/Kambaz/Courses/${quiz.course}/Quizzes/${quiz._id}`);
    }
  };

  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${quiz.course}/Quizzes`);
  };

  return (
    <div className="p-3 border rounded bg-light">
      <div className="mb-3">
        <label className="form-label fw-bold">Title</label>
        <input
          value={localQuiz.title}
          onChange={(e) => update("title", e.target.value)}
          className="form-control"
          placeholder="Untitled Quiz"
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Quiz Instructions</label>
        <textarea
          value={localQuiz.description || ""}
          onChange={(e) => update("description", e.target.value)}
          className="form-control"
          rows={4}
          placeholder="Enter instructions..."
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label fw-bold">Quiz Type</label>
          <select
            className="form-select"
            value={localQuiz.quizType || "Graded Quiz"}
            onChange={(e) => update("quizType", e.target.value)}
          >
            <option>Graded Quiz</option>
            <option>Practice Quiz</option>
            <option>Graded Survey</option>
            <option>Ungraded Survey</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label fw-bold">Assignment Group</label>
          <select
            className="form-select"
            value={localQuiz.assignmentGroup || "Quizzes"}
            onChange={(e) => update("assignmentGroup", e.target.value)}
          >
            <option>Quizzes</option>
            <option>Exams</option>
            <option>Assignments</option>
            <option>Project</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <div className="form-check">
            <input
              type="checkbox"
              checked={localQuiz.shuffleAnswers || false}
              onChange={(e) => update("shuffleAnswers", e.target.checked)}
              className="form-check-input"
            />
            <label className="form-check-label">Shuffle Answers</label>
          </div>
        </div>
        <div className="col-md-4">
          <label className="form-label fw-bold">Time Limit (minutes)</label>
          <input
            type="number"
            className="form-control"
            value={localQuiz.timeLimit || 20}
            onChange={(e) => update("timeLimit", +e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <div className="form-check mt-4">
            <input
              type="checkbox"
              checked={localQuiz.multipleAttempts || false}
              onChange={(e) => update("multipleAttempts", e.target.checked)}
              className="form-check-input"
            />
            <label className="form-check-label">Allow Multiple Attempts</label>
          </div>
        </div>
        {localQuiz.multipleAttempts && (
          <div className="mt-2">
            <label className="form-label fw-bold">How Many Attempts</label>
            <input
              type="number"
              className="form-control"
              value={localQuiz.howManyAttempts || 1}
              min={1}
              onChange={(e) => update("howManyAttempts", +e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label className="form-label fw-bold">Show Correct Answers</label>
          <select
            className="form-select"
            value={localQuiz.showCorrectAnswers || "Immediately"}
            onChange={(e) => update("showCorrectAnswers", e.target.value)}
          >
            <option>Immediately</option>
            <option>After Due Date</option>
            <option>Never</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label fw-bold">Access Code</label>
          <input
            value={localQuiz.accessCode || ""}
            onChange={(e) => update("accessCode", e.target.value)}
            className="form-control"
            placeholder="Leave blank for none"
          />
        </div>
        <div className="col-md-4">
          <label className="form-label fw-bold">One Question at a Time</label>
          <select
            className="form-select"
            value={localQuiz.oneQuestionAtATime || "Yes"}
            onChange={(e) => update("oneQuestionAtATime", e.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label className="form-label fw-bold">Webcam Required</label>
          <select
            className="form-select"
            value={localQuiz.webcamRequired || "No"}
            onChange={(e) => update("webcamRequired", e.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label fw-bold">Lock After Answering</label>
          <select
            className="form-select"
            value={localQuiz.lockAfterAnswer || "No"}
            onChange={(e) => update("lockAfterAnswer", e.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label className="form-label fw-bold">Due Date</label>
          <input
            type="datetime-local"
            className="form-control"
            value={localQuiz.dueDate || ""}
            onChange={(e) => update("dueDate", e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label fw-bold">Available From</label>
          <input
            type="datetime-local"
            className="form-control"
            value={localQuiz.availableFrom || ""}
            onChange={(e) => update("availableFrom", e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label fw-bold">Until</label>
          <input
            type="datetime-local"
            className="form-control"
            value={localQuiz.availableUntil || ""}
            onChange={(e) => update("availableUntil", e.target.value)}
          />
        </div>
      </div>

      <div className="mt-4 text-end">
        <button className="btn btn-danger me-2" onClick={handleCancel}>
          Cancel
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => handleSave(false)}
        >
          Save
        </button>
        <button className="btn btn-success" onClick={() => handleSave(true)}>
          Save & Publish
        </button>
      </div>
    </div>
  );
}
