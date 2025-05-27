import React, { useState } from 'react';
import api from './api';

const ViewFlashcards = () => {
  const [studentId, setStudentId] = useState('');
  const [limit, setLimit] = useState(5);
  const [flashcards, setFlashcards] = useState([]);

  const fetchFlashcards = async () => {
    try {
      const res = await api.get(`/get-subject?student_id=${studentId}&limit=${limit}`);
      setFlashcards(res.data);
    } catch (err) {
      alert("Error fetching flashcards");
    }
  };

  return (
    <div className="view-flashcards">
      <h2>View Flashcards</h2>
      <input value={studentId} onChange={e => setStudentId(e.target.value)} placeholder="Student ID" required />
      <input type="number" value={limit} onChange={e => setLimit(e.target.value)} />
      <button onClick={fetchFlashcards}>Get Flashcards</button>
      <ul>
        {flashcards.map((card, index) => (
          <li key={index}>
            <strong>{card.subject}</strong>: {card.question} → {card.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewFlashcards;
