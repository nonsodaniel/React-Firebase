import React, { Component } from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen';
import '../style/datatable.css'
import swal from 'sweetalert';
import Moment from "react-moment";


const $ = require('jquery');
$.DataTable = require("datatables.net")

class Holiday extends Component {

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
                <div className="main-content-container container-fluid px-4" style={{ background: "white" }}>
                    <div className="card-body" style={{ background: "white" }}>
                        <div class="content container-fluid">

                            <div class="row">
                                <div class="col-sm-5 col-5">
                                    <h4 class="page-title">Holidays 2019</h4>
                                </div>
                                <div class="col-sm-7 col-7 text-right m-b-30">
                                    <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_holiday"><i class="fa fa-plus"></i> Add Holiday</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="table-responsive">
                                        <table class="table table-striped custom-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Title </th>
                                                    <th>Holiday Date</th>
                                                    <th>Day</th>
                                                    <th class="text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="holiday-completed">
                                                    <td>1</td>
                                                    <td>New Year</td>
                                                    <td>1 Jan 2019</td>
                                                    <td>Sunday</td>
                                                    <td></td>
                                                </tr>
                                                <tr class="holiday-completed">
                                                    <td>2</td>
                                                    <td>Good Friday</td>
                                                    <td>14 Apr 2019</td>
                                                    <td>Friday</td>
                                                    <td></td>
                                                </tr>
                                                <tr class="holiday-completed">
                                                    <td>3</td>
                                                    <td>May Day</td>
                                                    <td>1 May 2019</td>
                                                    <td>Monday</td>
                                                    <td class="text-center">
                                                    </td>
                                                </tr>
                                                <tr class="holiday-completed">
                                                    <td>4</td>
                                                    <td>Memorial Day</td>
                                                    <td>28 May 2019</td>
                                                    <td>Monday</td>
                                                    <td class="text-center">
                                                    </td>
                                                </tr>
                                                <tr class="holiday-completed">
                                                    <td>5</td>
                                                    <td>Ramzon</td>
                                                    <td>26 Jun 2019</td>
                                                    <td>Monday</td>
                                                    <td></td>
                                                </tr>
                                                <tr class="holiday-upcoming">
                                                    <td>6</td>
                                                    <td>Bakrid</td>
                                                    <td>2 Sep 2019</td>
                                                    <td>Saturday</td>
                                                    <td class="text-right">
                                                        <div class="dropdown dropdown-action">
                                                            <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_holiday"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_holiday"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr class="holiday-upcoming">
                                                    <td>7</td>
                                                    <td>Deepavali</td>
                                                    <td>18 Oct 2019</td>
                                                    <td>Wednesday</td>
                                                    <td class="text-right">
                                                        <div class="dropdown dropdown-action">
                                                            <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_holiday"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_holiday"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr class="holiday-upcoming">
                                                    <td>8</td>
                                                    <td>Christmas</td>
                                                    <td>25 Dec 2019</td>
                                                    <td>Monday</td>
                                                    <td class="text-right">
                                                        <div class="dropdown dropdown-action">
                                                            <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_holiday"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_holiday"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
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


export default Holiday