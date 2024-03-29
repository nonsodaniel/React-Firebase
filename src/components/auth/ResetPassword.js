import React, { Component } from 'react'
// import { Preloader, Placeholder } from 'react-preloading-screen';
// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux'
// import { signIn } from '../store/actions/authActions'
import { Link } from 'react-router-dom';
// import swal from 'sweetalert'
import '../style/signIn.css';


class ResetPassword extends Component {


    componentDidMount() {

    }

    state = { password: "", c_password: "", isLoading: false }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ isLoading: true })
        console.log("my state", this.state)
        // let loginDetails = this.state;
        // let email = loginDetails.email, password = loginDetails.password;
        // let obj = { email, password };
    }

    render() {
        return (
            <div className="main-content-container container-fluid px-4" >
                {/* <!-- Page Header --> */}
                <div className="page-header row no-gutters py-4" style={{ height: "0px" }}>
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                        <h6 className="page-title">Admin Reset Password</h6>
                    </div>
                </div><br />

                <div className="container" style={{ background: "white", height: "433px" }}><br /><br />
                    <p className="" style={{ textAlign: "center", fontSize: "25px" }}>Login to your Account</p><br /><br />
                    <form className="form-group" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-2">Password: </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" id="password" placeholder="password" onChange={this.handleChange} required />
                            </div>
                        </div><br /><br />
                        <div className="row">
                            <div className="col-md-2">Confirm Password: </div>
                            <div className="col-md-8">
                                <input type="password" className="form-control" id="c_password" placeholder="Confirm Password" onChange={this.handleChange} required />
                            </div>
                        </div><br /><br />
                        <div className="row">
                            <div className="col-md-2"> </div>
                            <div className="col-md-8">
                                <button className="mb-2 btn btn-primary mr-2 col-md-12 glyphicons glyphicons-star" disabled={this.state.isLoading ? true : false}>
                                    {this.state.isLoading ? <span><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Loading...</span> : "Login"}
                                </button>
                                <div>Not an <b>Admin</b> yet? <Link to='/register'>Create an Account</Link></div>
                            </div>
                        </div><br /><br />
                    </form>

                </div>

            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     console.log("down state", state)
//     // this.setState({ propStatus: state })
//     const { authMessage, registerData, status } = state.auth;
//     return {
//         authMessage,
//         registerData,
//         status
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         signIn: (admin) => {
//             return new Promise((resolve) => {
//                 dispatch(signIn(admin, function (res) {
//                     resolve(res);
//                 }))
//             })
//         }
//     }
// }

export default ResetPassword