import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import image from '../style/images/avatar.jpg'
// import { withRouter } from 'react-router-dom';
import Moment from "react-moment";


class Dashboard extends Component {
  state = {
    admin: [], news: [], user: [], category: [], employees: [], fakedata: [], task: [], data: JSON.parse(localStorage.getItem("admin"))
  }


  componentDidMount() {
    if (!localStorage.getItem("admin")) {
      this.props.history.push('/')
    }
    let isDev = /localhost/.test(window.location.origin);
    console.log("isdev", isDev)
    let base_url = isDev ? "http://localhost:4000/api" : "https://workforce-api.herokuapp.com/api/"

    this.fetchUser();
    this.fetchTasks()

    fetch(`${base_url}/admin/`).then((res) => {
      return res.json();
    }).then((data) => {
      // console.log("admins", data);
      this.setState({ admin: data })

      fetch(`${base_url}employees/`).then((res) => {
        return res.json();
      }).then((data) => {
        console.log("News", data);
        // this.setState({ news: data });

        fetch(`${base_url}/category/`).then((res) => {
          return res.json();
        }).then((data) => {
          // console.log("Category", data);
          this.setState({ category: data })
        })

        fetch(`${base_url}/user/`).then((res) => {
          return res.json();
        }).then((data) => {
          // console.log("Users", data);
          this.setState({ user: data })
        })


      })

    })
  }

  fetchAdmin = async () => {

  }

  fetchUser = async () => {
    await fetch(`https://workforce-api.herokuapp.com/api/employees`).then(res => {
      return res.json();
    }).then(data => {
      console.log("hali", data)
      this.setState({ employees: data })
    })
  }

  fetchTasks = async () => {

    await fetch(`https://workforce-api.herokuapp.com/api/tasks`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDNmNmI0NDdkN2YyNTgxMGY2YmQ0YyIsImlhdCI6MTU2NDc0NzExOSwiZXhwIjoxNTY1MzUxOTE5fQ.PH2xntQHiooAiiRVSkIJnDyLROaWR-qPYiq46gxx5jg`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("tasks", data)
        this.setState({ task: data })
        console.log("My state", this.state.task)
      })
  }

  fetchNews = async () => {

  }

  fetchCategory = async () => {

  }

  render() {

    // console.log("Render state", this.state);
    let isDev = /localhost/.test(window.location.origin);
    // console.log("isdev", isDev)
    // let url = isDev ? "http://localhost:4000/" : "http://www.acadatrends.com/api"
    let adminData = this.state.admin, newsData = this.state.news, userData = this.state.user, categoryData = this.state.category,
      employeeData = this.state.employees, taskData = this.state.task;
    console.log("Yea", taskData)

    let adminLength = adminData.data ? adminData.data.length : 0;
    let newsLength = newsData.data ? newsData.data.length : 0;
    let userLength = userData.data ? userData.data.length : 0;
    let categoryLength = categoryData.data ? categoryData.data.length : 0;
    let employeesLength = employeeData.data ? employeeData.data.length : 0;
    let taskLength = taskData.data ? taskData.data.length : 0;
    // console.log("Admindata", adminData.data)

    let employeeList = employeeData.data ? (
      employeeData.data.slice(0, 5).map((o, i) => {
        console.log("myadmin data", o);
        return (
          <tr key={o.id}>
            <td><img src={image} alt="My photo" style={{ height: "40px", width: " 40px", borderRadius: "50px" }} /></td>
            <td>{o.firstname} {o.lastname}</td>
            <td>{o.email}</td>
            <td>{o.phone}</td>
            <td><Moment fromNow>{o.createdAt}</Moment></td>
          </tr>
        )
      })
    ) : (
        <tr className="text-center"><td>No data to show</td></tr>
      )


    let taskList = taskData.data ? (
      taskData.data.reverse().slice(0, 5).map((o, i) => {
        console.log("myadmin tasks", o);
        let issuer = o.issuer && o.issuer;
        let receiver = o.receiver && o.receiver
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
          </tr>
        )
      })
    ) : (
        <tr className="text-center"><td>No data to show</td></tr>
      )



    let userList = userData.data ? (
      userData.data.slice(0, 5).map((o, i) => {
        return (
          <tr key={o.id}>
            <td><img src={o.user_dp === undefined ? image : o.user_dp} style={{ height: "40px", width: " 40px", borderRadius: "50px" }} /></td>
            <td>{o.firstname + " " + o.othernames}</td>
            <td>{o.email}</td>
            <td>{o.phone}</td>
            <td><Moment fromNow>{o.createdAt}</Moment></td>
          </tr>
        )
      })
    ) : (
        <tr className="text-center"><td>No data to show</td></tr>
      )
    let newsList = newsData.data ? (
      newsData.data.slice(0, 5).map((o, i) => {
        return (
          <tr key={o.id}>
            <td style={{ width: "10%" }}><img src={o.news_dp === undefined ? image : o.news_dp} style={{ height: "112px", width: " 104px" }} /></td>
            <td style={{ width: "25%" }}>{o.title}</td>
            <td>{o.category}</td>
            <td style={{ width: "40%" }}>{o.content.slice(0, 200)}...Read More</td>
            <td>{o.author}</td>
            <td><Moment fromNow>{o.createdAt}</Moment></td>
          </tr>
        )
      })
    ) : (
        <tr className="text-center"><td>No data to show</td></tr>
      )

    let categoryList = categoryData.data ? (
      categoryData.data.slice(0, 5).map((o, i) => {
        return (
          <tr key={o.id}>
            <td>{i + 1}</td>
            <td>{o.code}</td>
            <td style={{ width: "20%" }}>{o.name}</td>
            <td><Moment fromNow>{o.createdAt}</Moment></td>
          </tr>
        )
      })
    ) : (
        <tr className="text-center"><td>No data to show</td></tr>
      )
    return (
      <div className="main-content-container container-fluid px-4">
        {/* <!-- Page Header --> */}
        <div className="page-header row no-gutters py-4">
          <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span className="text-uppercase page-subtitle">Dashboard</span>
            <h3 className="page-title">HR Overview</h3>
          </div>
        </div>
        {/* <!-- End Page Header -->
            <!-- Small Stats Blocks --> */}
        <div className="row">

          <div className="col-lg col-md-6 col-sm-6 mb-4">
            <div className="stats-small stats-small--1 card card-small">
              <div className="card-body p-0 d-flex">

                <div className="d-flex flex-column m-auto">
                  <NavLink to="/login" style={{ cursor: "pointer" }}>
                    <div className="stats-small__data text-center">
                      <span className="stats-small__label text-uppercase">Employees</span>
                      <h6 className="stats-small__value count my-3">{employeesLength}</h6>
                    </div>
                    <div className="stats-small__data">
                      <span className="stats-small__percentage stats-small__percentage--increase">4.7%</span>
                    </div>
                  </NavLink>
                </div>

                <canvas height="120" className="blog-overview-stats-small-1"></canvas>
              </div>
            </div>
          </div>
          <div className="col-lg col-md-6 col-sm-6 mb-4">
            <div className="stats-small stats-small--1 card card-small">
              <div className="card-body p-0 d-flex">
                <div className="d-flex flex-column m-auto">
                  <NavLink to='/register'>
                    <div className="stats-small__data text-center">
                      <span className="stats-small__label text-uppercase">Clients</span>
                      <h6 className="stats-small__value count my-3">6</h6>
                    </div>
                    <div className="stats-small__data">
                      <span className="stats-small__percentage stats-small__percentage--increase">12.4%</span>
                    </div>
                  </NavLink>
                </div>
                <canvas height="120" className="blog-overview-stats-small-2"></canvas>
              </div>
            </div>
          </div>
          <div className="col-lg col-md-4 col-sm-6 mb-4">
            <div className="stats-small stats-small--1 card card-small">
              <div className="card-body p-0 d-flex">
                <div className="d-flex flex-column m-auto">
                  <div className="stats-small__data text-center">
                    <span className="stats-small__label text-uppercase">Clients</span>
                    <h6 className="stats-small__value count my-3">{userLength}</h6>
                  </div>
                  <div className="stats-small__data">
                    <span className="stats-small__percentage stats-small__percentage--decrease">3.8%</span>
                  </div>
                </div>
                <canvas height="120" className="blog-overview-stats-small-3"></canvas>
              </div>
            </div>
          </div>
          <div className="col-lg col-md-4 col-sm-6 mb-4">
            <div className="stats-small stats-small--1 card card-small">
              <div className="card-body p-0 d-flex">
                <div className="d-flex flex-column m-auto">
                  <div className="stats-small__data text-center">
                    <span className="stats-small__label text-uppercase">Employers</span>
                    <h6 className="stats-small__value count my-3">{categoryLength}</h6>
                  </div>
                  <div className="stats-small__data">
                    <span className="stats-small__percentage stats-small__percentage--increase">12.4%</span>
                  </div>
                </div>
                <canvas height="120" className="blog-overview-stats-small-4"></canvas>
              </div>
            </div>
          </div>
          <div className="col-lg col-md-4 col-sm-12 mb-4">
            <div className="stats-small stats-small--1 card card-small">
              <div className="card-body p-0 d-flex">
                <div className="d-flex flex-column m-auto">
                  <div className="stats-small__data text-center">
                    <span className="stats-small__label text-uppercase">Tasks</span>
                    <h6 className="stats-small__value count my-3">{taskLength}</h6>
                  </div>
                  <div className="stats-small__data">
                    <span className="stats-small__percentage stats-small__percentage--decrease">2.4%</span>
                  </div>
                </div>
                <canvas height="120" className="blog-overview-stats-small-5"></canvas>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Small Stats Blocks --> */}
        <div className="row">
          {/* <!-- Users Stats --> */}

          <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
            <div className="card card-small">
              <div className="card-header border-bottom">
                <div className="row" >
                  <div className="col-md-6"><h6 className="m-0">Recent  Employees</h6></div>
                  <div className="col-md-6">
                    <Link to="/view-admins">
                      <button className="btn btn-primary" style={buttonStyle}>
                        <i className="material-icons" style={{ top: "-4px", fontSize: "15px" }}>visibility</i>
                      </button>
                    </Link>
                  </div>
                  <hr />
                </div>
                <table id="dtBasicExample" className="table-responsive table table-striped table-bordered" cellSpacing="0" width="100%">
                  <thead>
                    <tr>
                      <th>Picture</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <td>Date Created</td>
                      {/* <th>Edit</th>
                    <th>Delete</th> */}
                    </tr>
                  </thead>
                  <tbody>

                    {employeeList}



                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Picture</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <td>Date Created</td>
                      {/* <th>Edit</th>
                      <th>Delete</th> */}
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
            <div className="card card-small">
              <div className="card-header border-bottom">
                <div className="row" >
                  <div className="col-md-6"><h6 className="m-0">Recent  Tasks</h6></div>
                  <div className="col-md-6">
                    <Link to="/view-users">
                      <button className="btn btn-primary" style={buttonStyle}>
                        <i className="material-icons" style={{ top: "-4px", fontSize: "15px" }}>visibility</i>
                      </button>
                    </Link>
                  </div>
                  <hr />
                </div>
                <table id="" className="table table-responsive table-striped table-bordered" cellSpacing="0" width="100%">
                  <thead>
                    <tr>
                      <th>S/n</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Issuer</th>
                      <th>Receiver</th>
                      <th>Status</th>
                      <th>ETA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taskList}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>S/n</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Issuer</th>
                      <th>Receiver</th>
                      <th>Status</th>
                      <th>ETA</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          {/* end row */}
        </div>



        <div className="row">
          {/* <!-- Users Stats --> */}

          <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
            <div className="card card-small">
              <div className="card-header border-bottom">
                <div className="row" >
                  <div className="col-md-6"><h6 className="m-0">Recent  Clients</h6></div>
                  <div className="col-md-6">
                    <Link to="/view-category">
                      <button className="btn btn-primary" style={buttonStyle}>
                        <i className="material-icons" style={{ top: "-4px", fontSize: "15px" }}>visibility</i>
                      </button>
                    </Link>
                  </div>
                  <hr />
                </div>
                <table id="" className="table table-responsive table-striped table-bordered" cellSpacing="0" width="100%">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Client Name</th>
                      <th>Client email</th>
                      <th>Phone</th>
                      <th>Location</th>
                      <th>Date Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Interswitch</td>
                      <td>info@interswitch.org</td>
                      <td>0905955996</td>
                      <td>Nigeria</td>
                      <td>10 days ago</td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>Cloudinary</td>
                      <td>info@cloudinary.org</td>
                      <td>0905933996</td>
                      <td>United Kingdom</td>
                      <td>13 days ago</td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>Unilag</td>
                      <td>info@unilag.org</td>
                      <td>0902344596</td>
                      <td>Nigeria</td>
                      <td>20 days ago</td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td>WHOGOHOST</td>
                      <td>info@whogohost.org</td>
                      <td>0902344355</td>
                      <td>Nigeria</td>
                      <td>26 days ago</td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>Dangote</td>
                      <td>info@dangote.org</td>
                      <td>090234435335</td>
                      <td>Nigeria</td>
                      <td>3 months ago</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>#</th>
                      <th>Client Name</th>
                      <th>Client email</th>
                      <th>Phone</th>
                      <th>Location</th>
                      <th>Date Created</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>


          <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
            <div className="card card-small">
              <div className="card-header border-bottom">
                <div className="row" >
                  <div className="col-md-6"><h6 className="m-0">Recent Employee Sources</h6></div>
                  <div className="col-md-6">
                    <Link to="/view-category">
                      <button className="btn btn-primary" style={buttonStyle}>
                        <i className="material-icons" style={{ top: "-4px", fontSize: "15px" }}>visibility</i>
                      </button>
                    </Link>
                  </div>
                  <hr />
                </div>
                <table id="" className="table table-responsive table-striped table-bordered" cellSpacing="0" width="100%">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Holders Name</th>
                      <th>Holders email</th>
                      <th>Phone</th>
                      <th>Location</th>
                      <th>Date Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Interswitch</td>
                      <td>info@interswitch.org</td>
                      <td>0905955996</td>
                      <td>Nigeria</td>
                      <td>10 days ago</td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>Cloudinary</td>
                      <td>info@cloudinary.org</td>
                      <td>0905933996</td>
                      <td>United Kingdom</td>
                      <td>13 days ago</td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>Unilag</td>
                      <td>info@unilag.org</td>
                      <td>0902344596</td>
                      <td>Nigeria</td>
                      <td>20 days ago</td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td>WHOGOHOST</td>
                      <td>info@whogohost.org</td>
                      <td>0902344355</td>
                      <td>Nigeria</td>
                      <td>26 days ago</td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>Dangote</td>
                      <td>info@dangote.org</td>
                      <td>090234435335</td>
                      <td>Nigeria</td>
                      <td>3 months ago</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>#</th>
                      <th>Holders Name</th>
                      <th>Holders email</th>
                      <th>Phone</th>
                      <th>Location</th>
                      <th>Date Created</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>




      </div >
      // {/* <!-- End Top Referrals Component --> */ }

    )
  }
}


const buttonStyle = {
  float: "right", height: "25px", borderRadius: "50px", backgroundImage: "#007bff"
}


export default Dashboard


