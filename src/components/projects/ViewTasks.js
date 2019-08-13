import React, { Component } from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import '../style/datatable.css';
import swal from 'sweetalert';
import Moment from 'react-moment';

const $ = require('jquery');
$.DataTable = require('datatables.net');

class ViewTasks extends Component {
    state = { tasks: [], isLoading: false, isEdit: false };

    componentDidMount() {
        this.fetchTasks();
    }

    fetchTasks = async () => {

        fetch(`https://workforce-api.herokuapp.com/api/tasks`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDNmNmI0NDdkN2YyNTgxMGY2YmQ0YyIsImlhdCI6MTU2NDc0NzExOSwiZXhwIjoxNTY1MzUxOTE5fQ.PH2xntQHiooAiiRVSkIJnDyLROaWR-qPYiq46gxx5jg`
            }
        })
            .then(res => res.json())
            .then(data => {
                this.setState({ tasks: data })
                $("#example").DataTable()
            })
    }


    handleEdit = e => {
        console.log('task id ', e.target.id);
        this.setState({ isEdit: true });
        this.props.history.push(`/edit-task/${e.target.id}`);
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

        const mydata = this.state.tasks.data;
        console.log('render', mydata);

        let taskList = mydata ? (
            mydata.reverse().map((o, i) => {
                let issuer = o.issuer && o.issuer;
                let receiver = o.receiver && o.receiver
                console.log('my data', o);
                console.log('my issuer', issuer);
                return (
                    <tr key={o.id}>
                        <td>{i + 1}</td>
                        <td>{o.title}</td>
                        <td>{o.description}</td>
                        <td>{issuer && issuer.firstname} {issuer && issuer.lastname}</td>
                        <td>{receiver && receiver.firstname} {receiver && receiver.lastname}</td>
                        <td>{o.status}</td>
                        <td>
                            <Moment fromNow>{o.eta}</Moment>
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
                        {/* <div className="row">
                            <div className="col-md-6">Helo</div>
                            <div className="col-md-6 text-right">world </div>
                        </div> */}
                        <table
                            id="example"
                            className="table table-striped table-bordered table-hover"
                            width="100%"
                        >
                            <thead>
                                <tr>
                                    <th>S/n</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Issuer</th>
                                    <th>Receiver</th>
                                    <th>Status</th>
                                    <th>ETA</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>

                            <tbody>{taskList}</tbody>
                        </table>
                    </div>
                </div>
            </Preloader>
        );
    }
}

export default ViewTasks;
