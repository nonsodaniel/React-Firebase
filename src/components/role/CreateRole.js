import React, { Component } from 'react';
// import { Preloader, Placeholder } from 'react-preloading-screen';
import { connect } from 'react-redux';
import { createRole } from '../store/actions/roleActions';
import swal from 'sweetalert';
import '../layouts/swal.css';

class CreateRole extends Component {
  state = {
    name: '',
    actions: [],
    data: {},
    isLoading: false
  };
  componentDidMount() {
    // if(local) return <Redirect to = '/' />
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleCheckChange = e => {
    const checked = e.target.checked;
    let actions = this.state.actions;

    if (checked) {
      actions.push(e.target.id);
      this.setState({ actions });
    } else {
      let index = actions.findIndex(action => e.target.id === action);
      actions.splice(index, 1);
      if (actions.length === 0) {
        this.setState({ actions: [] });
      } else {
        this.setState({ actions: actions });
      }
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ isLoading: true });

    const { name, actions } = this.state;

    let roleDetails = {
      name,
      actions
    };

    console.log(roleDetails);

    await this.props.createRole(roleDetails);
    let { status, message } = this.props;
    console.log(status);
    if (status === 201) {
      setTimeout(() => {
        swal('Response', 'Role added successfully', 'success');
        this.props.history.push('/view-roles');
      }, 2500);
    } else {
      setTimeout(() => {
        swal('Response', 'Failed to add role', 'error');
        this.setState({ isLoading: false });
      }, 2500);
    }
  };

  render() {
    return (
      <div
        className="main-content-container container-fluid px-4"
        id="overlay"
        style={{ background: '' }}
      >
        {/* <!-- Page Header --> */}
        <div
          className="page-header row no-gutters py-4"
          style={{ height: '0px' }}
        >
          <div className="col-12 col-sm-4 text-center text-sm-left mb-0" />
        </div>

        <div
          className="container"
          style={{ background: 'white', height: 'auto' }}
        >
          <br />
          <br />
          <p className="" style={{ textAlign: 'center', fontSize: '25px' }}>
            Add Role
          </p>
          <br />
          <br />
          <form className="form-group" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-2">Role name </div>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Role name"
                  onChange={this.handleChange}
                  disabled={this.state.isLoading ? true : false}
                  required
                />
              </div>
            </div>
            <br />
            <br />

            <div className="row">
              <div className="col-md-2">Tasks role actions </div>
              <div className="col-md-8">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="createtasks"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Add
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="readtasks"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Read
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="edittasks"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Edit
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="deletetasks"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Delete
                  </label>
                </div>
              </div>
            </div>
            <br />
            <br />

            <div className="row">
              <div className="col-md-2">Leaves role actions </div>
              <div className="col-md-8">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="createleaves"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Add
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="readleaves"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Read
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="editleaves"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Edit
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="deleteleaves"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Delete
                  </label>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-md-2">Employee role actions </div>
              <div className="col-md-8">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="createattendance"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Add
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="readattendance"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Read
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="editattendance"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Edit
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="deleteattendance"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Delete
                  </label>
                </div>
              </div>
            </div>
            <br />
            <br />

            <div className="row">
              <div className="col-md-2">Attendance role actions </div>
              <div className="col-md-8">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="createroles"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Add
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="readroles"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Read
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="editroles"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Edit
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="deleteroles"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Delete
                  </label>
                </div>
              </div>
            </div>
            <br />
            <br />

            <div className="row">
              <div className="col-md-2">Tasks role actions </div>
              <div className="col-md-8">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="createtasks"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Add
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="readtasks"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Read
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="edittasks"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Edit
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="deletetasks"
                    onChange={this.handleCheckChange}
                    disabled={this.state.isLoading ? true : false}
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Delete
                  </label>
                </div>
              </div>
            </div>
            <br />
            <br />

            <div className="row">
              <div className="col-md-2"> </div>
              <div className="col-md-8">
                <button
                  className="mb-2 btn btn-primary mr-2 col-md-12 glyphicons glyphicons-star"
                  disabled={this.state.isLoading ? true : false}
                >
                  {this.state.isLoading ? (
                    <span>
                      <span
                        className="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true"
                      />{' '}
                      Adding role...
                    </span>
                  ) : (
                      'Add role'
                    )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('Map props', state);
  const { roleMessage, roleData, status } = state.role;
  return {
    roleMessage,
    roleData,
    status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createRole: role => {
      return new Promise(resolve => {
        dispatch(
          createRole(role, res => {
            resolve(res);
          })
        );
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRole);
