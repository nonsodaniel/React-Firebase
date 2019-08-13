import React, { Component } from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen';
import '../style/datatable.css'
import swal from 'sweetalert';
import Moment from "react-moment";


const $ = require('jquery');
$.DataTable = require("datatables.net")

class ViewClient extends Component {

    state = { category: [], isLoading: false, isEdit: false }

    componentDidMount() {
        this.fetchCategory()
    }

    fetchCategory = async () => {
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
        this.props.history.push(`/edit-category/${e.target.id}`)
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
        console.log("tunde", mydata)

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
                    <div class="content container-fluid">


                        <div class="row">
                            <div class="col">
                                <h4 class="page-title">Clients</h4>
                            </div>
                            <div class="col-12 text-right m-b-30">
                                <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_client"><i class="fa fa-plus"></i> Add Client</a>
                                <div class="view-icons">
                                    <a href="clients.html" class="grid-view btn btn-link active"><i class="fa fa-th"></i></a>
                                    <a href="clients-list.html" class="list-view btn btn-link"><i class="fa fa-bars"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="row filter-row">
                            <div class="col-sm-6 col-md-3">
                                <div class="form-group form-focus">
                                    <input type="text" class="form-control floating" />
                                    <label class="focus-label">Client ID</label>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="form-group form-focus">
                                    <input type="text" class="form-control floating" />
                                    <label class="focus-label">Client Name</label>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="form-group form-focus select-focus focused">
                                    <select class="select floating select2-hidden-accessible" data-select2-id="1" tabindex="-1" aria-hidden="true">
                                        <option data-select2-id="3">Select Company</option>
                                        <option>Global Technologies</option>
                                        <option>Delta Infotech</option>
                                    </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-0m2o-container"><span class="select2-selection__rendered" id="select2-0m2o-container" role="textbox" aria-readonly="true" title="Select Company">Select Company</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                    <label class="focus-label">Company</label>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <a href="#" class="btn btn-success btn-block"> Search </a>
                            </div>
                        </div>


                        <div class="row staff-grid-row">
                            <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                                <div class="profile-widget">
                                    <div class="profile-img">
                                        <a href="client-profile.html" class="avatar"><img alt="" src="assets/img/profiles/avatar-19.jpg" /></a>
                                    </div>
                                    <div class="dropdown profile-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                        </div>
                                    </div>
                                    <h4 class="user-name m-t-10 mb-0 text-ellipsis"><a href="client-profile.html">Global Technologies</a></h4>
                                    <h5 class="user-name m-t-10 mb-0 text-ellipsis"><a href="client-profile.html">Barry Cuda</a></h5>
                                    <div class="small text-muted">CEO</div>
                                    <a href="chat.html" class="btn btn-white btn-sm m-t-10">Message</a>
                                    <a href="client-profile.html" class="btn btn-white btn-sm m-t-10">View Profile</a>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                                <div class="profile-widget">
                                    <div class="profile-img">
                                        <a href="client-profile.html" class="avatar"><img alt="" src="assets/img/profiles/avatar-29.jpg" /></a>
                                    </div>
                                    <div class="dropdown profile-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                        </div>
                                    </div>
                                    <h4 class="user-name m-t-10 mb-0 text-ellipsis"><a href="client-profile.html">Delta Infotech</a></h4>
                                    <h5 class="user-name m-t-10 mb-0 text-ellipsis"><a href="client-profile.html">Tressa Wexler</a></h5>
                                    <div class="small text-muted">Manager</div>
                                    <a href="chat.html" class="btn btn-white btn-sm m-t-10">Message</a>
                                    <a href="client-profile.html" class="btn btn-white btn-sm m-t-10">View Profile</a>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                                <div class="profile-widget">
                                    <div class="profile-img">
                                        <a href="client-profile.html" class="avatar"><img src="assets/img/profiles/avatar-07.jpg" alt="" /></a>
                                    </div>
                                    <div class="dropdown profile-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                        </div>
                                    </div>
                                    <h4 class="user-name m-t-10 mb-0 text-ellipsis"><a href="client-profile.html">Cream Inc</a></h4>
                                    <h5 class="user-name m-t-10 mb-0 text-ellipsis"><a href="client-profile.html">Ruby Bartlett</a></h5>
                                    <div class="small text-muted">CEO</div>
                                    <a href="chat.html" class="btn btn-white btn-sm m-t-10">Message</a>
                                    <a href="client-profile.html" class="btn btn-white btn-sm m-t-10">View Profile</a>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                                <div class="profile-widget">
                                    <div class="profile-img">
                                        <a href="client-profile.html" class="avatar"><img src="assets/img/profiles/avatar-06.jpg" alt="hello" /></a>
                                    </div>
                                    <div class="dropdown profile-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                        </div>
                                    </div>
                                    <h4 class="user-name m-t-10 mb-0 text-ellipsis"><a href="client-profile.html">Wellware Company</a></h4>
                                    <h5 class="user-name m-t-10 mb-0 text-ellipsis"><a href="client-profile.html">Misty Tison</a></h5>
                                    <div class="small text-muted">CEO</div>
                                    <a href="chat.html" class="btn btn-white btn-sm m-t-10">Message</a>
                                    <a href="client-profile.html" class="btn btn-white btn-sm m-t-10">View Profile</a>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                                <div class="profile-widget">
                                    <div class="profile-img">
                                        <a href="client-profile.html" class="avatar"><img alt="" src="assets/img/profiles/avatar-14.jpg" /></a>
                                    </div>
                                    <div class="dropdown profile-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                        </div>
                                    </div>
                                    <h4 class="user-name m-t-10 mb-0 text-ellipsis"><a href="client-profile.html">Mustang Technologies</a></h4>
                                    <h5 class="user-name m-t-10 mb-0 text-ellipsis"><a href="client-profile.html">Daniel Deacon</a></h5>
                                    <div class="small text-muted">CEO</div>
                                    <a href="chat.html" class="btn btn-white btn-sm m-t-10">Message</a>
                                    <a href="client-profile.html" class="btn btn-white btn-sm m-t-10">View Profile</a>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                                <div class="profile-widget">
                                    <div class="profile-img">
                                        <a href="client-profile.html" class="avatar"><img alt="" src="assets/img/profiles/avatar-18.jpg" /></a>
                                    </div>
                                    <div class="dropdown profile-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                        </div>
                                    </div>
                                    <h4 class="user-name m-t-10 mb-0 text-ellipsis"><a href="client-profile.html">International Software Inc</a></h4>
                                    <h5 class="user-name m-t-10 mb-0 text-ellipsis"><a href="client-profile.html">Walter Weaver</a></h5>
                                    <div class="small text-muted">CEO</div>
                                    <a href="chat.html" class="btn btn-white btn-sm m-t-10">Message</a>
                                    <a href="client-profile.html" class="btn btn-white btn-sm m-t-10">View Profile</a>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                                <div class="profile-widget">
                                    <div class="profile-img">
                                        <a href="client-profile.html" class="avatar"><img alt="" src="assets/img/profiles/avatar-28.jpg" /></a>
                                    </div>
                                    <div class="dropdown profile-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                        </div>
                                    </div>
                                    <h4 class="user-name m-t-10 mb-0 text-ellipsis"><a href="client-profile.html">Mercury Software Inc</a></h4>
                                    <h5 class="user-name m-t-10 mb-0 text-ellipsis"><a href="client-profile.html">Amanda Warren</a></h5>
                                    <div class="small text-muted">CEO</div>
                                    <a href="chat.html" class="btn btn-white btn-sm m-t-10">Message</a>
                                    <a href="client-profile.html" class="btn btn-white btn-sm m-t-10">View Profile</a>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                                <div class="profile-widget">
                                    <div class="profile-img">
                                        <a href="client-profile.html" class="avatar"><img alt="" src="assets/img/profiles/avatar-13.jpg" /></a>
                                    </div>
                                    <div class="dropdown profile-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                        </div>
                                    </div>
                                    <h4 class="user-name m-t-10 mb-0 text-ellipsis"><a href="client-profile.html">Carlson Tech</a></h4>
                                    <h5 class="user-name m-t-10 mb-0 text-ellipsis"><a href="client-profile.html">Betty Carlson</a></h5>
                                    <div class="small text-muted">CEO</div>
                                    <a href="chat.html" class="btn btn-white btn-sm m-t-10">Message</a>
                                    <a href="client-profile.html" class="btn btn-white btn-sm m-t-10">View Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Preloader>
        )
    }
}


export default ViewClient