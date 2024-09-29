import React, { useState } from 'react';
import { addEmployee } from '../api';
import EmployeeForm from '../components/EmployeeForm';

const ManageEmployees = () => {
  const [message, setMessage] = useState('');

  const handleAddEmployee = async (employee) => {
    try {
      await addEmployee(employee);
      setMessage('Employee added successfully!');
    } catch (error) {
      setMessage('Error adding employee: ' + error.message);
    }
  };

  return (
    <div className="manage-employees-container">
      <h1>Manage Employees</h1>
      <EmployeeForm onAddEmployee={handleAddEmployee} />
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ManageEmployees;
