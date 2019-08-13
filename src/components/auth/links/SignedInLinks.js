import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import NewsDropdown from '../../news/dropdown/News';
import CategoryDropdown from '../../category/dropdown/Category';
import EmployeeDropdown from '../../employees/dropdown/EmployeeDropdown';
import RoleDropdown from '../../role/dropdown/RoleDropdown';
import ClientDropdown from '../../ourClients/dropdown/ClientDropdown';
import TaskDropdown from '../../projects/dropdown/TaskDropdown';

import { withRouter } from 'react-router-dom';

class SignedInLinks extends Component {
  state = {
    isNews: false,
    isCategory: false,
    isRole: false,
    isEmployee: false,
    isTask: false,
    isEmployer: false,
    isClient: false,
    redirect: false
  };

  clickNews = e => {
    e.preventDefault();
    this.setState({ isNews: true });
    if (this.state.isNews) {
      this.setState({ isNews: false });
    } else {
      this.setState({ isNews: true });
    }
  };
  clickCategory = e => {
    e.preventDefault();
    this.setState({ isCategory: true });
    if (this.state.isCategory) {
      this.setState({ isCategory: false });
    } else {
      this.setState({ isCategory: true });
    }
  };

  clickEmployee = e => {
    e.preventDefault();
    this.setState({ isEmployee: true });

    if (this.state.isEmployee) {
      this.setState({ isEmployee: false });
    } else {
      this.setState({ isEmployee: true });
    }
  };

  clickTask = e => {
    e.preventDefault();
    this.setState({ isTask: true });

    if (this.state.isTask) {
      this.setState({ isTask: false });
    } else {
      this.setState({ isTask: true });
    }
  };

  clickRole = e => {
    e.preventDefault();
    this.setState({ isRole: true });

    if (this.state.isRole) {
      this.setState({ isRole: false });
    } else {
      this.setState({ isRole: true });
    }
  };

  clickClient = e => {
    e.preventDefault();
    this.setState({ isClient: true });

    if (this.state.isClient) {
      this.setState({ isClient: false });
    } else {
      this.setState({ isClient: true });
    }
  };

  clickEmployer = e => {
    e.preventDefault();
    this.setState({ isEmployer: true });

    if (this.state.isEmployer) {
      this.setState({ isEmployer: false });
    } else {
      this.setState({ isEmployer: true });
    }
  };


  handleLogOut = e => {
    e.preventDefault();
    this.props.signOut();
    this.props.history.push('/login');
  };

  render() {
    let state = this.state;
    let newsLink = state.isNews ? <NewsDropdown /> : null;
    let catLink = state.isCategory ? <CategoryDropdown /> : null;
    let employeeLink = state.isEmployee ? <EmployeeDropdown /> : null;
    let roleLink = state.isRole ? <RoleDropdown /> : null;

    // let employerLink = state.isEmployer ? <EmployerDropdown /> : null;

    let clientLink = state.isClient ? <ClientDropdown /> : null;
    let taskLink = state.isTask ? <TaskDropdown /> : null;
    return (
      <ul className="nav flex-column">
        {/* <li className="nav-item" onClick={this.clickEmployer}>
          <Link to="" className="nav-link">
            <i className="material-icons">event_note</i>
            <span> Employers</span>
          </Link>
        </li>
        {employerLink} */}

        <li className="nav-item" onClick={this.clickEmployee}>
          <Link to="" className="nav-link">
            <i className="material-icons">event_note</i>
            <span> Employees</span>
          </Link>
        </li>
        {employeeLink}

        <li className="nav-item" onClick={this.clickClient}>
          <Link to="" className="nav-link">
            <i className="material-icons">event_note</i>
            <span> Clients</span>
          </Link>
        </li>
        {clientLink}

        <li className="nav-item" onClick={this.clickTask}>
          <Link to="" className="nav-link">
            <i className="material-icons">event_note</i>
            <span> Tasks</span>
          </Link>
        </li>
        {taskLink}
        {/* 
        <li className="nav-item" onClick={this.clickNews}>
          <Link to="" className="nav-link">
            <i className="material-icons">event_note</i>
            <span> News</span>
          </Link>
        </li>
        {newsLink}

        <li className="nav-item" onClick={this.clickCategory}>
          <Link to="" className="nav-link">
            <i className="material-icons">storage</i>
            <span>Category</span>
          </Link>
        </li>
        {catLink} */}
        {/* 
        <li className="nav-item" onClick={this.clickRole}>
          <Link to="" className="nav-link">
            <i className="material-icons">storage</i>
            <span>Role</span>
          </Link>

        </li>
        {roleLink} */}

        <li className="nav-item" onClick={this.handleLogOut}>
          <Link to="" className="nav-link">
            <i className="material-icons" style={{ color: 'red' }}>
              settings_power
            </i>
            {/* <MaterialIcon icon="dashboard" /> */}
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const { authMessage, registerData, status } = state.auth;
  return {
    authMessage,
    registerData,
    status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignedInLinks));
