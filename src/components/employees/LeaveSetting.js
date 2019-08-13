
import React from 'react'

export default function LeaveSetting() {
    return (

        <React.Fragment>
            {/* <div className="page-wrapper" style={{ minHeight: "657px" }}></div> */}

            <div className="content container-fluid">

                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="page-title">Leave Settings</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">

                        <div className="card-box leave-box" id="leave_annual">
                            <div className="h3 card-title with-switch">
                                Annual
                                <div className="onoffswitch">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="switch_annual" />
                                    <label className="onoffswitch-label" htmlhtmlFor="switch_annual">
                                        <span className="onoffswitch-inner"></span>
                                        <span className="onoffswitch-switch"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="leave-item">

                                <div className="leave-row">
                                    <div className="leave-left">
                                        <div className="input-box">
                                            <div className="form-group">
                                                <label>Days</label>
                                                <input type="text" className="form-control" disabled="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="leave-right">
                                        <button className="leave-edit-btn">Edit</button>
                                    </div>
                                </div>
                                <div className="leave-row">
                                    <div className="leave-left">
                                        <div className="input-box">
                                            <label className="d-block">Carry forward</label>
                                            <div className="leave-inline-form">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="carry_no" value="option1" disabled="" />
                                                    <label className="form-check-label" htmlFor="carry_no">No</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="carry_yes" value="option2" disabled="" />
                                                    <label className="form-check-label" htmlFor="carry_yes">Yes</label>
                                                </div>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Max</span>
                                                    </div>
                                                    <input type="text" className="form-control" disabled="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="leave-right">
                                        <button className="leave-edit-btn">
                                            Edit
                                        </button>
                                    </div>
                                </div>
                                <div className="leave-row">
                                    <div className="leave-left">
                                        <div className="input-box">
                                            <label className="d-block">Earned leave</label>
                                            <div className="leave-inline-form">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="earned_no" value="option1" disabled="" />
                                                    <label className="form-check-label" htmlFor="earned_no">No</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="earned_yes" value="option2" disabled="" />
                                                    <label className="form-check-label" htmlFor="earned_yes">Yes</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="leave-right">
                                        <button className="leave-edit-btn">
                                            Edit
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="custom-policy">
                                <div className="leave-header">
                                    <div className="title">Custom policy</div>
                                    <div className="leave-action">
                                        <button className="btn btn-sm btn-primary" type="button" data-toggle="modal" data-target="#add_custom_policy"><i className="fa fa-plus"></i> Add custom policy</button>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover table-nowrap leave-table">
                                        <thead>
                                            <tr>
                                                <th className="l-name">Name</th>
                                                <th className="l-days">Days</th>
                                                <th className="l-assignee">Assignee</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>5 Year Service </td>
                                                <td>5</td>
                                                <td>
                                                    <a href="#" className="avatar"><img alt="" src="assets/img/profiles/avatar-02.jpg" /></a>
                                                    <a href="#">John Doe</a>
                                                </td>
                                                <td className="text-right">
                                                    <div className="dropdown dropdown-action">
                                                        <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item" data-toggle="modal" data-target="#edit_custom_policy"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                            <a href="#" className="dropdown-item" data-toggle="modal" data-target="#delete_custom_policy"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                        <div className="card-box leave-box" id="leave_sick">
                            <div className="h3 card-title with-switch">
                                Sick
                                <div className="onoffswitch">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="switch_sick" checked="" />
                                    <label className="onoffswitch-label" htmlFor="switch_sick">
                                        <span className="onoffswitch-inner"></span>
                                        <span className="onoffswitch-switch"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="leave-item">
                                <div className="leave-row">
                                    <div className="leave-left">
                                        <div className="input-box">
                                            <div className="form-group">
                                                <label>Days</label>
                                                <input type="text" className="form-control" disabled="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="leave-right">
                                        <button className="leave-edit-btn">
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-box leave-box" id="leave_hospitalisation">
                            <div className="h3 card-title with-switch">
                                Hospitalisation
                                <div className="onoffswitch">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="switch_hospitalisation" />
                                    <label className="onoffswitch-label" htmlFor="switch_hospitalisation">
                                        <span className="onoffswitch-inner"></span>
                                        <span className="onoffswitch-switch"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="leave-item">

                                <div className="leave-row">
                                    <div className="leave-left">
                                        <div className="input-box">
                                            <div className="form-group">
                                                <label>Days</label>
                                                <input type="text" className="form-control" disabled="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="leave-right">
                                        <button className="leave-edit-btn" disabled="" >
                                            Edit
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="custom-policy">
                                <div className="leave-header">
                                    <div className="title">Custom policy</div>
                                    <div className="leave-action">
                                        <button className="btn btn-sm btn-primary" type="button" disabled="" ><i className="fa fa-plus"></i> Add custom policy</button>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover table-nowrap leave-table">
                                        <thead>
                                            <tr>
                                                <th className="l-name">Name</th>
                                                <th className="l-days">Days</th>
                                                <th className="l-assignee">Assignee</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>5 Year Service </td>
                                                <td>5</td>
                                                <td>
                                                    <a href="#" className="avatar"><img alt="" src="assets/img/profiles/avatar-02.jpg" /></a>
                                                    <a href="#">John Doe</a>
                                                </td>
                                                <td className="text-right">
                                                    <div className="dropdown dropdown-action">
                                                        <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                            <a href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                        <div className="card-box leave-box" id="leave_maternity">
                            <div className="h3 card-title with-switch">
                                Maternity  <span className="subtitle">Assigned to female only</span>
                                <div className="onoffswitch">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="switch_maternity" checked="" />
                                    <label className="onoffswitch-label" htmlFor="switch_maternity">
                                        <span className="onoffswitch-inner"></span>
                                        <span className="onoffswitch-switch"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="leave-item">
                                <div className="leave-row">
                                    <div className="leave-left">
                                        <div className="input-box">
                                            <div className="form-group">
                                                <label>Days</label>
                                                <input type="text" className="form-control" disabled="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="leave-right">
                                        <button className="leave-edit-btn">
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-box leave-box" id="leave_paternity">
                            <div className="h3 card-title with-switch">
                                Paternity  <span className="subtitle">Assigned to male only</span>
                                <div className="onoffswitch">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="switch_paternity" />
                                    <label className="onoffswitch-label" htmlFor="switch_paternity">
                                        <span className="onoffswitch-inner"></span>
                                        <span className="onoffswitch-switch"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="leave-item">
                                <div className="leave-row">
                                    <div className="leave-left">
                                        <div className="input-box">
                                            <div className="form-group">
                                                <label>Days</label>
                                                <input type="text" className="form-control" disabled="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="leave-right">
                                        <button className="leave-edit-btn" disabled="">
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-box leave-box" id="leave_custom01">
                            <div className="h3 card-title with-switch">
                                LOP
                                <div className="onoffswitch">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="switch_custom01" checked="" />
                                    <label className="onoffswitch-label" htmlFor="switch_custom01">
                                        <span className="onoffswitch-inner"></span>
                                        <span className="onoffswitch-switch"></span>
                                    </label>
                                </div>
                                <button className="btn btn-danger leave-delete-btn" type="button">Delete</button>
                            </div>
                            <div className="leave-item">

                                <div className="leave-row">
                                    <div className="leave-left">
                                        <div className="input-box">
                                            <div className="form-group">
                                                <label>Days</label>
                                                <input type="text" className="form-control" disabled="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="leave-right">
                                        <button className="leave-edit-btn">Edit</button>
                                    </div>
                                </div>
                                <div className="leave-row">
                                    <div className="leave-left">
                                        <div className="input-box">
                                            <label className="d-block">Carry forward</label>
                                            <div className="leave-inline-form">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="carryForward" id="carry_no_01" value="option1" disabled="" />
                                                    <label className="form-check-label" htmlFor="carry_no_01">No</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="carryForward" id="carry_yes_01" value="option2" disabled="" />
                                                    <label className="form-check-label" htmlFor="carry_yes_01">Yes</label>
                                                </div>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Max</span>
                                                    </div>
                                                    <input type="text" className="form-control" disabled="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="leave-right">
                                        <button className="leave-edit-btn">
                                            Edit
                                        </button>
                                    </div>
                                </div>
                                <div className="leave-row">
                                    <div className="leave-left">
                                        <div className="input-box">
                                            <label className="d-block">Earned leave</label>
                                            <div className="leave-inline-form">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" disabled="" />
                                                    <label className="form-check-label" htmlFor="inlineRadio1">No</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" disabled="" />
                                                    <label className="form-check-label" htmlFor="inlineRadio2">Yes</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="leave-right">
                                        <button className="leave-edit-btn">
                                            Edit
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="custom-policy">
                                <div className="leave-header">
                                    <div className="title">Custom policy</div>
                                    <div className="leave-action">
                                        <button className="btn btn-sm btn-primary" type="button" data-toggle="modal" data-target="#add_custom_policy"><i className="fa fa-plus"></i> Add custom policy</button>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover table-nowrap leave-table">
                                        <thead>
                                            <tr>
                                                <th className="l-name">Name</th>
                                                <th className="l-days">Days</th>
                                                <th className="l-assignee">Assignee</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>5 Year Service </td>
                                                <td>5</td>
                                                <td>
                                                    <a href="#" className="avatar"><img alt="" src="assets/img/profiles/avatar-02.jpg" /></a>
                                                    <a href="#">John Doe</a>
                                                </td>
                                                <td className="text-right">
                                                    <div className="dropdown dropdown-action">
                                                        <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item" data-toggle="modal" data-target="#edit_custom_policy"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                            <a href="#" className="dropdown-item" data-toggle="modal" data-target="#delete_custom_policy"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
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

                <div id="add_custom_policy" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Custom Policy</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Policy Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Days <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group leave-duallist">
                                        <label>Add employee</label>
                                        <div className="row">
                                            <div className="col-lg-5 col-sm-5">
                                                <select name="customleave_from" id="customleave_select" className="form-control" size="5" multiple="multiple">





                                                    <option value="1">Bernardo Galaviz </option><option value="2">Jeffrey Warden</option><option value="2">John Doe</option><option value="2">John Smith</option><option value="3">Mike Litorus</option></select>
                                            </div>
                                            <div className="multiselect-controls col-lg-2 col-sm-2">
                                                <button type="button" id="customleave_select_rightAll" className="btn btn-block btn-white"><i className="fa fa-forward"></i></button>
                                                <button type="button" id="customleave_select_rightSelected" className="btn btn-block btn-white"><i className="fa fa-chevron-right"></i></button>
                                                <button type="button" id="customleave_select_leftSelected" className="btn btn-block btn-white"><i className="fa fa-chevron-left"></i></button>
                                                <button type="button" id="customleave_select_leftAll" className="btn btn-block btn-white"><i className="fa fa-backward"></i></button>
                                            </div>
                                            <div className="col-lg-5 col-sm-5">
                                                <select name="customleave_to" id="customleave_select_to" className="form-control" size="8" multiple="multiple"></select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="submit-section">
                                        <button className="btn btn-primary submit-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="edit_custom_policy" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Custom Policy</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Policy Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" value="LOP" />
                                    </div>
                                    <div className="form-group">
                                        <label>Days <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" value="4" />
                                    </div>
                                    <div className="form-group leave-duallist">
                                        <label>Add employee</label>
                                        <div className="row">
                                            <div className="col-lg-5 col-sm-5">
                                                <select name="edit_customleave_from" id="edit_customleave_select" className="form-control" size="5" multiple="multiple">





                                                    <option value="1">Bernardo Galaviz </option><option value="2">Jeffrey Warden</option><option value="2">John Doe</option><option value="2">John Smith</option><option value="3">Mike Litorus</option></select>
                                            </div>
                                            <div className="multiselect-controls col-lg-2 col-sm-2">
                                                <button type="button" id="edit_customleave_select_rightAll" className="btn btn-block btn-white"><i className="fa fa-forward"></i></button>
                                                <button type="button" id="edit_customleave_select_rightSelected" className="btn btn-block btn-white"><i className="fa fa-chevron-right"></i></button>
                                                <button type="button" id="edit_customleave_select_leftSelected" className="btn btn-block btn-white"><i className="fa fa-chevron-left"></i></button>
                                                <button type="button" id="edit_customleave_select_leftAll" className="btn btn-block btn-white"><i className="fa fa-backward"></i></button>
                                            </div>
                                            <div className="col-lg-5 col-sm-5">
                                                <select name="customleave_to" id="edit_customleave_select_to" className="form-control" size="8" multiple="multiple"></select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="submit-section">
                                        <button className="btn btn-primary submit-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal custom-modal fade" id="delete_custom_policy" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="form-header">
                                    <h3>Delete Custom Policy</h3>
                                    <p>Are you sure want to delete?</p>
                                </div>
                                <div className="modal-btn delete-action">
                                    <div className="row">
                                        <div className="col-6">
                                            <a href="javascript:void(0);" className="btn btn-primary continue-btn">Delete</a>
                                        </div>
                                        <div className="col-6">
                                            <a href="javascript:void(0);" data-dismiss="modal" className="btn btn-primary cancel-btn">Cancel</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /Delete Custom Policy Modal --> */}

            </div>
        </React.Fragment >
    )
}
