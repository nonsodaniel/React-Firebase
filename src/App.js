import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Sidebar from './components/layouts/Sidebar';
import Footer from './components/layouts/Footer';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layouts/Navbar';
import AddNews from './components/news/AddNews';
import ViewNews from './components/news/ViewNews';
import AddCategory from './components/category/AddCategory';
import ViewCategory from './components/category/ViewCategory';
import EditCategory from './components/category/EditCategory';
import SignIn from './components/auth/SignIn';
import ResetPassword from './components/auth/ResetPassword';
import SignUp from './components/auth/SignUp';
import EditNews from '../src/components/news/EditNews';
import Forgotpassword from './components/auth/ForgotPassword';

import AddEmployee from './components/employees/AddEmployee';
import ViewEmployees from './components/employees/ViewEmployees';

import AddTask from './components/projects/AddTask';
import ViewTasks from './components/projects/ViewTasks';
import EditEmployee from './components/employees/EditEmployee';
import CreateRole from './components/role/CreateRole';
import ViewRoles from './components/role/ViewRoles';
import Attendance from './components/employees/Attendance';
import Holiday from './components/employees/Holiday';
import LeaveSetting from './components/employees/LeaveSetting';
import Leaves from './components/employees/Leave';
import AddClient from './components/ourClients/AddClient'
import ViewClient from './components/ourClients/ViewClient'
import Performance from './components/employees/Performance'
import Resignation from './components/employees/Resignation';

class App extends Component {
  componentDidMount() {
    this.handleClearConsole()
  }
  handleClearConsole = () => {
    setInterval(() => {
      console.clear();
    }, 2000)
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Sidebar />
          <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/add-news" component={AddNews} />
              <Route exact path="/view-news" component={ViewNews} />
              <Route exact path="/add-category" component={AddCategory} />
              <Route exact path="/view-category" component={ViewCategory} />
              <Route exact path="/edit-category/:id" component={EditCategory} />
              <Route exact path="/login" component={SignIn} />
              <Route
                exact
                path="/reset-password/:id"
                component={ResetPassword}
              />
              <Route exact path="/register" component={SignUp} />
              <Route exact path="/navbar" component={Navbar} />

              <Route exact path="/edit-news/:id" component={EditNews} />
              <Route exact path="/forgot-password" component={Forgotpassword} />

              {/* EMPLOYEE'S AREA */}

              <Route exact path="/add-employee" component={AddEmployee} />
              <Route exact path="/view-employees" component={ViewEmployees} />
              <Route exact path="/edit-employee/:id" component={EditEmployee} />
              {/* EMPLOYER'S AREA */}

              {/* <Route exact path="/add-employer" component={AddEmployer} /> */}
              {/* <Route exact path="/view-employers" component={ViewEmployers} /> */}

              {/* EMPLOYER'S AREA */}

              <Route exact path="/add-task" component={AddTask} />
              <Route exact path="/view-tasks" component={ViewTasks} />

              {/* <Route exact path="/test" component={Test} /> */}
              {/* CLIENT'S AREA */}

              <Route exact path="/add-client" component={AddClient} />
              <Route exact path="/view-clients" component={ViewClient} />

              {/* ROLES AREA */}

              <Route exact path="/create-role" component={CreateRole} />
              <Route exact path="/view-roles" component={ViewRoles} />

              <Route exact path="/view-holidays" component={Holiday} />
              <Route exact path="/performance-overview" component={Performance} />
              <Route exact path="/leave-settings" component={LeaveSetting} />
              <Route exact path="/view-attendance" component={Attendance} />
              <Route exact path="/view-resignations" component={Resignation} />
              <Route exact path="/view-leaves" component={Leaves} />
            </Switch>
            <Footer />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
