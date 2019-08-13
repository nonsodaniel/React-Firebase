import React, { Component } from 'react'
// import { Preloader, Placeholder } from 'react-preloading-screen';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createProject } from '../store/actions/projectActions'
import swal from 'sweetalert';
import '../layouts/swal.css'

class AddEmployees extends Component {
    state = { name: "", title: "", description: "", issuer: "", receiver: "", eta: "", data: {}, isLoading: false }
    componentDidMount() {
        // if(local) return <Redirect to = '/' />
    }


    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({ isLoading: true });
        let { title, description, issuer, receiver, eta } = this.state;
        let obj = { title, description, issuer, receiver, eta }
        console.log("Obj", obj)
        await this.props.createProject(obj);

    }
    render() {

        return (
            <div className="main-content-container container-fluid px-4" id="overlay" style={{ background: "" }}>
                {/* <!-- Page Header --> */}
                <div className="page-header row no-gutters py-4" style={{ height: "0px" }}>
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                        {/* <h6 className="page-title">Create task</h6> */}
                    </div>
                </div>

                <div className="container" style={{ background: "white", height: "auto" }}><br /><br />
                    <p className="" style={{ textAlign: "center", fontSize: "25px" }}>Create a Task</p><br /><br />
                    <form className="form-group" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-2">Task Name : </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" id="name" placeholder="Task name" onChange={this.handleChange} disabled={this.state.isLoading ? true : false} />
                            </div>
                        </div><br /><br />


                        <div className="row">
                            <div className="col-md-2">Task Title : </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" id="title" placeholder="Task title" onChange={this.handleChange} disabled={this.state.isLoading ? true : false} />
                            </div>
                        </div><br /><br />

                        <div className="row">
                            <div className="col-md-2">Task Description </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" id="description" placeholder="Task Description" onChange={this.handleChange} disabled={this.state.isLoading ? true : false} />
                            </div>
                        </div><br /><br />

                        <div className="row">
                            <div className="col-md-2">Task Issuer : </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" id="issuer" placeholder="Task Issuer" onChange={this.handleChange} disabled={this.state.isLoading ? true : false} />
                            </div>
                        </div><br /><br />

                        <div className="row">
                            <div className="col-md-2">Task Recepient : </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control" id="receiver" placeholder="Task Recepient" onChange={this.handleChange} disabled={this.state.isLoading ? true : false} />
                            </div>
                        </div><br /><br />

                        <div className="row">
                            <div className="col-md-2">Task ETA : </div>
                            <div className="col-md-8">
                                <input type="date" className="form-control" id="eta" placeholder="Eta" onChange={this.handleChange} disabled={this.state.isLoading ? true : false} />
                            </div>
                        </div><br /><br />



                        <div className="row">
                            <div className="col-md-2"> </div>
                            <div className="col-md-8">
                                <button className="mb-2 btn btn-primary mr-2 col-md-12 glyphicons glyphicons-star" disabled={this.state.isLoading ? true : false}>
                                    {this.state.isLoading ? <span><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Creating task...</span> : "Create task"}
                                </button>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     //     console.log("Map props", state)
//     //     const { projectMessage, projectData, status } = state.project;
//     //     return {
//     //         projectMessage,
//     //         projectData,
//     //         status
//     //     }
//     // }

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (task) => {
            return new Promise((resolve) => {
                dispatch(createProject(task, (res) => {
                    resolve(res);
                }))
            })
        }
    }
}



export default connect(null, mapDispatchToProps)(AddEmployees)
