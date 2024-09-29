import React, { useEffect, useState } from 'react';
import { fetchEmployees } from '../api';
import EmployeeList from '../components/EmployeeList';
import './Dashboard.css'

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      const data = await fetchEmployees();
      setEmployees(data);
    };
    getEmployees();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Employee Dashboard</h1>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default Dashboard;
