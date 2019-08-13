import React, { Component } from 'react';
// import { Preloader, Placeholder } from 'react-preloading-screen';
import { connect } from 'react-redux';
import { createEmployee } from '../store/actions/employeeActions';
import swal from 'sweetalert';
import '../layouts/swal.css';

class AddEmployee extends Component {
    state = {
        name: '',
        actions: '',
        data: {},
        isLoading: false
    };
    componentDidMount() {
        // if(local) return <Redirect to = '/' />
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ isLoading: true });

        const {
            name,
            actions,
        }
            = this.state;

        let roleDetails = {
            name,
            actions,
        };

        console.log(roleDetails);

        await this.props.createrole(roleDetails);
        let { status, message } = this.props
        if (status === 201) {
            setTimeout(() => {
                swal('Response', 'Role added successfully', 'success');
                this.props.history.push('/view-employees');
            }, 2500);
        } else {
            setTimeout(() => {
                swal('Response', 'Failed to add employee', 'error');
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
                                    id="firstname"
                                    placeholder="First name"
                                    onChange={this.handleChange}
                                    disabled={this.state.isLoading ? true : false}
                                    required
                                />
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="row">
                            <div className="col-md-2">Last name </div>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastname"
                                    placeholder="Last name"
                                    onChange={this.handleChange}
                                    disabled={this.state.isLoading ? true : false}
                                    required
                                />
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="row">
                            <div className="col-md-2">Email address </div>
                            <div className="col-md-8">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email"
                                    onChange={this.handleChange}
                                    disabled={this.state.isLoading ? true : false}
                                    required
                                />
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="row">
                            <div className="col-md-2">Password </div>
                            <div className="col-md-8">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                    disabled={this.state.isLoading ? true : false}
                                    required
                                />
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="row">
                            <div className="col-md-2">Phone number </div>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Phone number"
                                    onChange={this.handleChange}
                                    disabled={this.state.isLoading ? true : false}
                                    required
                                />
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="row">
                            <div className="col-md-2">Date of birth </div>
                            <div className="col-md-8">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dob"
                                    placeholder=""
                                    onChange={this.handleChange}
                                    disabled={this.state.isLoading ? true : false}
                                    required
                                />
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="row">
                            <div className="col-md-2">Gender </div>
                            <div className="col-md-8">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        id="male"
                                        onChange={this.handleGenderChange}
                                        disabled={this.state.isLoading ? true : false}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="male">
                                        Male
                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        id="female"
                                        onChange={this.handleGenderChange}
                                        disabled={this.state.isLoading ? true : false}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="female">
                                        Female
                  </label>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="row">
                            <div className="col-md-2">Employee role </div>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="role"
                                    placeholder="Employee role"
                                    onChange={this.handleChange}
                                    disabled={this.state.isLoading ? true : false}
                                    required
                                />
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="row">
                            <div className="col-md-2">Profile picture </div>
                            <div className="col-md-8">
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="custom-file-input"
                                        id="picture"
                                        onChange={this.setImage}
                                        required
                                    />
                                    <label className="custom-file-label" htmlFor="picture">
                                        Choose picture...
                  </label>
                                    <div className="invalid-feedback">
                                        Example invalid custom file feedback
                  </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="row">
                            <div className="col-md-2">CV file </div>
                            <div className="col-md-8">
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        accept=".pdf"
                                        className="custom-file-input"
                                        id="cv"
                                        onChange={this.setCv}

                                    />
                                    <label className="custom-file-label" htmlFor="cv">
                                        Choose file (pdf only)
                  </label>
                                    <div className="invalid-feedback">
                                        Example invalid custom file feedback
                  </div>
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
                                            Adding employee...
                    </span>
                                    ) : (
                                            'Add employee'
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
    const { employeeMessage, employeeData, status } = state.employee;
    return {
        employeeMessage,
        employeeData,
        status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createEmployee: employee => {
            return new Promise(resolve => {
                dispatch(
                    createEmployee(employee, res => {
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
)(AddEmployee);
