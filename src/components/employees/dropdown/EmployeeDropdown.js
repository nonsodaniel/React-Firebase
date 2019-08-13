import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Category extends Component {
  render() {
    return (
      <ul className="nav flex-column">
        <li className="nav-item" style={{ background: '#f5f5f5' }}>
          <NavLink to="/add-employee" className="nav-link">
            <i className="material-icons">note_add</i>
            <span>Add Employee</span>
          </NavLink>
        </li>

        <li className="nav-item" style={{ background: '#f5f5f5' }}>
          <NavLink to="/view-employees" className="nav-link ">
            <i className="material-icons">note_add</i>
            <span>View Employees</span>
          </NavLink>
        </li>

        <li className="nav-item" style={{ background: '#f5f5f5' }}>
          <NavLink to="/view-attendance" className="nav-link ">
            <i className="material-icons">note_add</i>
            <span>Attendance</span>
          </NavLink>
        </li>

        <li className="nav-item" style={{ background: '#f5f5f5' }}>
          <NavLink to="/leave-settings" className="nav-link ">
            <i className="material-icons">note_add</i>
            <span>Leaves Settings</span>
          </NavLink>
        </li>

        <li className="nav-item" style={{ background: '#f5f5f5' }}>
          <NavLink to="/view-leaves" className="nav-link ">
            <i className="material-icons">note_add</i>
            <span>View Leaves</span>
          </NavLink>
        </li>

        <li className="nav-item" style={{ background: '#f5f5f5' }}>
          <NavLink to="/performance-overview" className="nav-link ">
            <i className="material-icons">note_add</i>
            <span>Perfromance Overview</span>
          </NavLink>
        </li>



        <li className="nav-item" style={{ background: '#f5f5f5' }}>
          <NavLink to="/view-resignations" className="nav-link ">
            <i className="material-icons">note_add</i>
            <span>Resignations</span>
          </NavLink>
        </li>

        <li className="nav-item" style={{ background: '#f5f5f5' }}>
          <NavLink to="/view-terminations" className="nav-link ">
            <i className="material-icons">note_add</i>
            <span>Terminations</span>
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Category;
