import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Role extends Component {
  render() {
    return (
      <ul className="nav flex-column">
        <li className="nav-item" style={{ background: '#f5f5f5' }}>
          <NavLink to="/create-role" className="nav-link">
            <i className="material-icons">note_add</i>
            <span>Add Role</span>
          </NavLink>
        </li>

        <li className="nav-item" style={{ background: '#f5f5f5' }}>
          <NavLink to="/view-roles" className="nav-link ">
            <i className="material-icons">note_add</i>
            <span>View Roles</span>
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Role;
