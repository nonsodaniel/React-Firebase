import React, { Component } from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import '../style/datatable.css';
import swal from 'sweetalert';
import Moment from 'react-moment';

const $ = require('jquery');
$.DataTable = require('datatables.net');

class ViewEmployees extends Component {
  state = { employees: [], isLoading: false, isEdit: false };

  componentDidMount() {
    this.fetchEmployees();

  }

  fetchEmployees = async () => {
    let isDev = /localhost/.test(window.location.origin);
    console.log('isdev', isDev);
    let base_url = 'https://workforce-api.herokuapp.com/api';
    // let base_url = isDev ? "http://localhost:4000/api" : "http://www.acadatrends.com/api"
    fetch(`${base_url}/employees/`)
      .then(response => {
        return response.json();
      })
      .then(employeesData => {
        // console.log('employees data ', employeesData.data);
        this.setState({
          category: employeesData.data.length
            ? employeesData.data.reverse()
            : null
        });
        $('#example').DataTable();
      });
  };

  handleEdit = e => {
    console.log('employee id ', e.target.id);
    this.setState({ isEdit: true });
    this.props.history.push(`/edit-employee/${e.target.id}`);
  };

  handleDelete = e => {
    e.preventDefault();
    console.log(e.target.id);
    let id = e.target.id;
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to retrieve',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        console.log('Will delete');

        fetch(`http://owhnonso.herokuapp.com/api/admin/${id}`, {
          method: 'DELETE',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'x-access-token': localStorage.getItem('admin') || ''
          }
        })
          .then(res => {
            res.json();
          })
          .then(data => {
            console.log('data', data);
            swal('File successfully deleted', {
              icon: 'success'
            });
            this.fetchCategory();
          });
      } else {
        console.log('Will not delete');
      }
    });
  };

  render() {
    if (this.state.isEdit) {
    }
    console.log('render', this.state);
    const mydata = this.state.category;

    let categoryList = mydata ? (
      mydata.map((o, i) => {
        // console.log('my data', o);
        return (
          <tr key={o._id}>
            <td>{i + 1}</td>
            <td>{o.firstname}</td>
            <td>{o.lastname}</td>
            <td>{o.role}</td>
            <td>{o.email}</td>
            <td>{o.phone}</td>
            <td>{o.dob}</td>
            <td>{o.gender}</td>
            <td>
              <Moment fromNow>{o.createdAt}</Moment>
            </td>
            <td>
              <button
                className="btn btn-primary btn-xs"
                style={{ borderRadius: '50px', width: '10px' }}
                onClick={this.handleEdit}
                id={o._id}
              >
                <i
                  className="material-icons"
                  id={o._id}
                  style={{ left: '-6px', fontSize: '13px' }}
                >
                  mode_edit
                </i>
              </button>
            </td>
            <td>
              <button
                className="btn btn-danger btn-xs"
                style={{ borderRadius: '50px', width: '10px' }}
                onClick={this.handleDelete}
                id={o._id}
              >
                <i
                  className="material-icons"
                  id={o.id}
                  style={{ left: '-6px', fontSize: '13px' }}
                >
                  delete_sweep
                </i>
              </button>
            </td>
          </tr>
        );
      })
    ) : (
        <tr>
          <td>No data to show</td>
        </tr>
      );
    return (
      <Preloader>
        <Placeholder>
          <span>Loading...</span>
        </Placeholder>
        <div
          className="main-content-container container-fluid px-4"
          style={{ background: 'white' }}
        >
          <div className="card-body" style={{ background: 'white' }}>
            <div className="row">
              <div className="col-md-6">Helo</div>
              <div className="col-md-6 text-right">world </div>
            </div>
            <table
              id="example"
              className="table table-striped table-bordered table-hover"
              width="100%"
            >
              <thead>
                <tr>
                  <th>S/n</th>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Role</th>
                  <th>Email address</th>
                  <th>Phone</th>
                  <th>Date of birth</th>
                  <th>Gender</th>
                  <th>Date employed</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>{categoryList}</tbody>
            </table>
          </div>
        </div>

      </Preloader>
    );
  }
}

export default ViewEmployees;
