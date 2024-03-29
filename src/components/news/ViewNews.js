
import React, { Component } from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen';
import { connect } from "react-redux";
import { getNews } from "../store/actions/projectActions";
import '../style/datatable.css'
import swal from 'sweetalert';
import Moment from "react-moment";

const $ = require('jquery');
$.DataTable = require("datatables.net")

class ViewNews extends Component {

  state = { news: [], isLoading: false, isEdit: false }

  componentDidMount() {
    // $("#example").DataTable();
    this.fetchData()
    // let x = document.querySelectorAll("select")[0]; x.className = 'form-control';
  }

  fetchData = async () => {
    let _data = await this.props.getNews();
    console.log("_data", _data)
    let { data } = _data.response;
    this.setState({ news: data.length ? data : null });
  }

  handleEdit = (e) => {
    // console.log(e)
    // console.log(e.target.id)
    // this.setState({ isEdit: true })
    // console.log("Got here", e.target)
    this.props.history.push(`/edit-news/${e.target.id}`)
  }

  handleDelete = (e) => {
    let isDev = /localhost/.test(window.location.origin);
    console.log("isdev", isDev)
    let base_url = isDev ? "http://localhost:4000/api" : "www.acadatrends.com/api"

    // console.log(e.target.id)
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
          fetch(`${base_url}/news/${id}`, {
            method: "DELETE",
            headers: {
              'Content-type': "application/json"
            }
          }).then((res) => {
            res.json()
          }).then((data) => {
            // console.log("data", data)
            swal("File successfully deleted", {
              icon: "success"
            });
            this.props.history.push(`/view-news/`)
          })

        }
      })
  }



  render() {
    if (this.state.isEdit) {

    }
    // console.log("render", this.state)
    const mydata = this.state.news;
    // console.log("tunde", mydata)
    // console.log(this.state.news)
    let newsList = mydata ? (
      mydata.map((o, i) => {
        // console.log("my data", o);
        return (
          <tr key={o._id}>
            <td>{i + 1}</td>
            <td>{o.author}</td>
            <td>{o.title}</td>
            <td>{o.content.slice(0, 300)}</td>
            <td><Moment fromNow>{o.createdAt}</Moment></td>
            <td><button className="btn btn-primary btn-xs" style={{ borderRadius: "50px", width: "10px" }} onClick={this.handleEdit} id={o._id}><i className="material-icons" id={o._id} style={{ left: "-6px", fontSize: "13px" }}>mode_edit</i></button></td>
            <td><button className="btn btn-danger btn-xs" style={{ borderRadius: "50px", width: "10px" }} onClick={this.handleDelete} id={o._id}><i className="material-icons" id={o.id} style={{ left: "-6px", fontSize: "13px" }}>delete_sweep</i></button></td>
          </tr>
        )
      })
    ) : (
        <div>No data to show</div>
      )
    return (
      <Preloader>
        <Placeholder>
          <span fadeduration={10000}>Loading...</span>
        </Placeholder>
        <div className="main-content-container container-fluid px-4" style={{ background: "white" }}>
          <div className="card-body" style={{ background: "white" }}>
            <table id="example" className="table table-striped table-responsive  table-bordered table-hover" width="100%" >
              <thead>
                <tr>
                  <th>S/n</th>
                  <th>Author</th>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Date Created</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {newsList}
              </tbody>
            </table>
          </div>
        </div>
      </Preloader>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("Map props", state)
  const { projectMessage, projectData, status } = state.project;
  console.log("Scraa", projectMessage, projectData, status);
  return {
    projectMessage,
    projectData,
    status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNews() {
      return new Promise(resolve => {
        dispatch(
          getNews(res => {
            $("#example").DataTable();
            resolve(res)

          })
        );
      });
    }
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(ViewNews);