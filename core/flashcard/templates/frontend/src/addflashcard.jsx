import React, { useState } from 'react';
import api from './api';
import './App.css';

const AddFlashcard = () => {
  const [studentId, setStudentId] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/flashcard', { student_id: studentId, question, answer });
      setResponse(res.data);
    } catch (err) {
      alert("Error adding flashcard");
    }
  };

  return (
    <div className="add-flashcard">
      <h2>Add Flashcard</h2>
      <form onSubmit={handleSubmit}>
        <input value={studentId} onChange={e => setStudentId(e.target.value)} placeholder="Student ID" required />
        <input value={question} onChange={e => setQuestion(e.target.value)} placeholder="Question" required />
        <input value={answer} onChange={e => setAnswer(e.target.value)} placeholder="Answer" required />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <p><strong>Subject:</strong> {response.subject}</p>
          <p>{response.message}</p>
        </div>
      )}
    </div>
  );
};

export default AddFlashcard;
