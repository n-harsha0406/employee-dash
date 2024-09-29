import React from 'react';
import EmployeeCard from './EmployeeCard';
import './EmployeeList.css'; // Separate CSS file for list styles

const EmployeeList = ({ employees }) => {
  return (
    <div className="employee-list">
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        employees.map((employee) => <EmployeeCard key={employee.id} employee={employee} />)
      )}
    </div>
  );
};

export default EmployeeList;
