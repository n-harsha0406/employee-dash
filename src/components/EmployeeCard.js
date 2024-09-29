import React from 'react';
import './EmployeeCard.css'; // Separate CSS file for card styles

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>Email: {employee.email}</p>
      <p>Comment: {employee.body}</p>
    </div>
  );
};

export default EmployeeCard;
