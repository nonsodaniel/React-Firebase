import React, { Component } from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen';
import '../style/datatable.css'
import swal from 'sweetalert';
import Moment from "react-moment";



const $ = require('jquery');
$.DataTable = require("datatables.net")

class Attendance extends Component {

    state = { employers: [], isLoading: false, isEdit: false }

    componentDidMount() {
        this.fetchEmployers()
    }

    fetchEmployers = async () => {
        let isDev = /localhost/.test(window.location.origin);
        console.log("isdev", isDev)
        let base_url = isDev ? "http://localhost:4000/api" : "http://www.acadatrends.com/api"
        fetch(`${base_url}/category/`).then((response) => {
            return response.json()
        }).then((categoryData) => {
            console.log("yes", categoryData.data)
            this.setState({ category: categoryData.data.length ? categoryData.data.reverse() : null });
            $("#example").DataTable()
        })

    }

    handleEdit = (e) => {
        console.log(e.target.id)
        this.setState({ isEdit: true })
        this.props.history.push(`/edit-employer/${e.target.id}`)
    }

    handleDelete = (e) => {
        e.preventDefault()
        console.log(e.target.id)
        let id = e.target.id;
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to retrieve",
            icon: "warning",
            buttons: true,
            dangerMode: true
        })
            .then((willDelete) => {
                if (willDelete) {
                    console.log("Will delete")

                    fetch(`http://localhost:4000/api/category/${id}`, {
                        method: "DELETE",
                        cache: "no-cache",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                            "x-access-token": localStorage.getItem("admin") || ""
                        },
                    }).then((res) => {
                        res.json()
                    }).then((data) => {
                        console.log("data", data)
                        swal("File successfully deleted", {
                            icon: "success"
                        });
                        this.fetchCategory()
                    })

                } else {
                    console.log("Will not delete")
                }
            })
    }

    render() {
        if (this.state.isEdit) {

        }
        console.log("render", this.state)
        const mydata = this.state.category;

        let categoryList = mydata ? (
            mydata.map((o, i) => {
                console.log("my data", o);
                return (
                    <tr key={o.id}>
                        <td>{i + 1}</td>
                        <td>{o.name}</td>
                        <td>{o.code}</td>
                        <td><Moment fromNow>{o.createdAt}</Moment></td>
                        <td><button className="btn btn-primary btn-xs" style={{ borderRadius: "50px", width: "10px" }} onClick={this.handleEdit} id={o._id}><i className="material-icons" id={o._id} style={{ left: "-6px", fontSize: "13px" }}>mode_edit</i></button></td>
                        <td><button className="btn btn-danger btn-xs" style={{ borderRadius: "50px", width: "10px", }} onClick={this.handleDelete} id={o._id}><i className="material-icons" id={o.id} style={{ left: "-6px", fontSize: "13px" }}>delete_sweep</i></button></td>
                    </tr>
                )
            })
        ) : (
                <div>No data to show</div>
            )
        return (
            <Preloader>
                <Placeholder>
                    <span >Loading...</span>
                </Placeholder>

                <div
                    className="main-content-container container-fluid px-4"
                    style={{ background: 'white' }}
                >
                    <div className="card-body" style={{ background: 'white' }}>
                        <div className="content container-fluid">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h4 className="page-title">Attendance</h4>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card punch-status">
                                        <div className="card-body">
                                            <h5 className="card-title">Timesheet <small className="text-muted">11 Mar 2019</small></h5>
                                            <div className="punch-det">
                                                <h6>Punch In at</h6>
                                                <p>Wed, 11th Mar 2019 10.00 AM</p>
                                            </div>
                                            <div className="punch-info">
                                                <div className="punch-hours">
                                                    <span>3.45 hrs</span>
                                                </div>
                                            </div>
                                            <div className="punch-btn-section">
                                                <button type="button" className="btn btn-primary punch-btn">Punch Out</button>
                                            </div>
                                            <div className="statistics">
                                                <div className="row">
                                                    <div className="col-md-6 col-6 text-center">
                                                        <div className="stats-box">
                                                            <p>Break</p>
                                                            <h6>1.21 hrs</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-6 text-center">
                                                        <div className="stats-box">
                                                            <p>Overtime</p>
                                                            <h6>3 hrs</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card att-statistics">
                                        <div className="card-body">
                                            <h5 className="card-title">Statistics</h5>
                                            <div className="stats-list">
                                                <div className="stats-info">
                                                    <p>Today <strong>3.45 <small>/ 8 hrs</small></strong></p>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "31%" }} aria-valuenow="31" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="stats-info">
                                                    <p>This Week <strong>28 <small>/ 40 hrs</small></strong></p>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "31%" }} aria-valuenow="31" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="stats-info">
                                                    <p>This Month <strong>90 <small>/ 160 hrs</small></strong></p>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "62%" }} aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="stats-info">
                                                    <p>Remaining <strong>90 <small>/ 160 hrs</small></strong></p>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "62%" }} aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="stats-info">
                                                    <p>Overtime <strong>4</strong></p>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: "22%" }} aria-valuenow="22" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card recent-activity">
                                        <div className="card-body">
                                            <h5 className="card-title">Today Activity</h5>
                                            <ul className="res-activity-list">
                                                <li>
                                                    <p className="mb-0">Punch In at</p>
                                                    <p className="res-activity-time">
                                                        <i className="fa fa-clock-o"></i>
                                                        10.00 AM.
											</p>
                                                </li>
                                                <li>
                                                    <p className="mb-0">Punch Out at</p>
                                                    <p className="res-activity-time">
                                                        <i className="fa fa-clock-o"></i>
                                                        11.00 AM.
											</p>
                                                </li>
                                                <li>
                                                    <p className="mb-0">Punch In at</p>
                                                    <p className="res-activity-time">
                                                        <i className="fa fa-clock-o"></i>
                                                        11.15 AM.
											</p>
                                                </li>
                                                <li>
                                                    <p className="mb-0">Punch Out at</p>
                                                    <p className="res-activity-time">
                                                        <i className="fa fa-clock-o"></i>
                                                        1.30 PM.
											</p>
                                                </li>
                                                <li>
                                                    <p className="mb-0">Punch In at</p>
                                                    <p className="res-activity-time">
                                                        <i className="fa fa-clock-o"></i>
                                                        2.00 PM.
											</p>
                                                </li>
                                                <li>
                                                    <p className="mb-0">Punch Out at</p>
                                                    <p className="res-activity-time">
                                                        <i className="fa fa-clock-o"></i>
                                                        7.30 PM.
											</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row filter-row">
                                <div className="col-sm-3">
                                    <div className="form-group form-focus">
                                        <div className="cal-icon">
                                            <input type="text" className="form-control floating datetimepicker" />
                                        </div>
                                        <label className="focus-label">Date</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="table-responsive">
                                        <table className="table table-striped custom-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Date </th>
                                                    <th>Punch In</th>
                                                    <th>Punch Out</th>
                                                    <th>Production</th>
                                                    <th>Break</th>
                                                    <th>Overtime</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>19 Feb 2019</td>
                                                    <td>10 AM</td>
                                                    <td>7 PM</td>
                                                    <td>9 hrs</td>
                                                    <td>1 hrs</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>20 Feb 2019</td>
                                                    <td>10 AM</td>
                                                    <td>7 PM</td>
                                                    <td>9 hrs</td>
                                                    <td>1 hrs</td>
                                                    <td>0</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Preloader>
        )
    }
}


export default Attendance