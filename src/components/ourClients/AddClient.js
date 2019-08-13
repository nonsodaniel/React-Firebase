import React, { Component } from 'react';
// import { Preloader, Placeholder } from 'react-preloading-screen';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createEmployee } from '../store/actions/employeeActions';
import swal from 'sweetalert';
import '../layouts/swal.css';

class AddClient extends Component {
    state = {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        picture: 'pic',
        dob: '',
        gender: '',
        role: '',
        cv: 'cvv',
        data: {},
        isLoading: false
    };
    componentDidMount() {
        // if(local) return <Redirect to = '/' />
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleGenderChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ isLoading: true });

        const {
            firstname,
            lastname,
            phone,
            email,
            password,
            picture,
            dob,
            gender,
            role,
            cv
        } = this.state;

        let employeeDetails = {
            firstname,
            lastname,
            phone,
            email,
            password,
            picture: "mypicturestring",
            dob,
            gender,
            role,
            cv: "mycvstring"
        };

        console.log(employeeDetails);

        await this.props.createEmployee(employeeDetails);
        let { status, message } = this.props
        if (status === 201) {
            setTimeout(() => {
                swal('Response', 'Employee added successfully', 'success');
                this.props.history.push('/view-employees');
            }, 2500);
        } else {
            setTimeout(() => {
                swal('Response', 'Failed to add employee', 'error');
                this.setState({ isLoading: false });
            }, 2500);
        }
    };

    setImage = () => {
        let preview = document.getElementById('picture');
        let file = document.querySelector('input[type=file]').files[0];
        let reader = new FileReader();

        reader.addEventListener(
            'load',
            () => {
                preview.src = reader.result;
                let imgStr = reader.result;
                this.setState({ picture: imgStr });
                // console.log('My file result', imgStr);
            },
            false
        );

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    setCv = () => {
        let preview = document.getElementById('cv');
        let file = document.querySelector('#cv').files[0];
        let reader = new FileReader();

        reader.addEventListener(
            'load',
            () => {
                preview.src = reader.result;
                let cvStr = reader.result;
                // console.log('My file result', cvStr);
                this.setState({ cv: cvStr });
                // console.log('My state', this.state);
            },
            false
        );

        if (file) {
            reader.readAsDataURL(file);
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
                        Add Client
          </p>
                    <br />
                    <br />
                    <form className="form-group" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-2">First name </div>
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
                                            Adding Client...
                    </span>
                                    ) : (
                                            'Add  Client'
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
)(AddClient);
