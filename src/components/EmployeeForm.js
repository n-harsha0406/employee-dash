import React, { useState } from 'react';
import './EmployeeForm.css'; // Separate CSS file for form styles

const EmployeeForm = ({ onAddEmployee }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEmployee({ name, email, body });
    setName('');
    setEmail('');
    setBody('');
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Comment"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
