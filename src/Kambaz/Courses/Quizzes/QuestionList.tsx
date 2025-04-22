import { useEffect, useState } from "react";
import * as quizzesClient from "./client";
import QuestionEditor from "./QuestionEditor";

export default function QuestionList({ quizId }: { quizId: string }) {
  const [questions, setQuestions] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchQuestions = async () => {
    const data = await quizzesClient.getQuestions(quizId);
    setQuestions(data);
  };

  const addQuestion = async () => {
    const q = await quizzesClient.createQuestion(quizId);
    setQuestions([q, ...questions]);
    setEditingId(q._id);
  };

  const saveQuestion = async (updated: any) => {
    await quizzesClient.updateQuestion(updated);
    const newList = questions.map((q) => (q._id === updated._id ? updated : q));
    setQuestions(newList);
    setEditingId(null);
  };

  const deleteQuestion = async (id: string) => {
    await quizzesClient.deleteQuestion(id);
    setQuestions(questions.filter((q) => q._id !== id));
  };

  useEffect(() => {
    fetchQuestions();
  }, [quizId]);

  const totalPoints = questions.reduce((sum, q) => sum + (q.points || 0), 0);

  return (
    <div>
      <button className="btn btn-success mb-3" onClick={addQuestion}>
        + Add Question
      </button>
      <p>
        <strong>Total Points:</strong> {totalPoints}
      </p>
      {questions.map((q) => (
        <div key={q._id} className="border rounded p-3 mb-2">
          <QuestionEditor
            question={q}
            editing={editingId === q._id}
            onEdit={() => setEditingId(q._id)}
            onCancel={() => setEditingId(null)}
            onSave={saveQuestion}
            onDelete={deleteQuestion}
          />
        </div>
      ))}
    </div>
  );
}
