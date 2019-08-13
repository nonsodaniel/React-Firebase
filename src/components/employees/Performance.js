import React from 'react'

export default function Performance() {
    return (
        <React.Fragment>
            <div class="content container-fluid">


                <div class="row">
                    <div class="col-sm-12">
                        <h4 class="page-title">Performance Review</h4>
                    </div>
                </div>

                <section class="review-section information">
                    <div class="review-header text-center">
                        <h3 class="review-title">Employee Basic Information</h3>
                        <p class="text-muted">Lorem ipsum dollar</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="table-responsive">
                                <table class="table table-bordered table-nowrap review-table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <form>
                                                    <div class="form-group">
                                                        <label for="name">Name</label>
                                                        <input type="text" class="form-control" id="name" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="depart3">Department</label>
                                                        <input type="text" class="form-control" id="depart3" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="departa">Designation</label>
                                                        <input type="text" class="form-control" id="departa" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="qualif">Qualification: </label>
                                                        <input type="text" class="form-control" id="qualif" />
                                                    </div>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <div class="form-group">
                                                        <label for="doj">Emp ID</label>
                                                        <input type="text" class="form-control" value="DGT-009" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="doj">Date of Join</label>
                                                        <input type="text" class="form-control" id="doj" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="doc">Date of Confirmation</label>
                                                        <input type="text" class="form-control" id="doc" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="qualif1">Previous years of Exp</label>
                                                        <input type="text" class="form-control" id="qualif1" />
                                                    </div>
                                                </form>
                                            </td>
                                            <td>
                                                <form>
                                                    <div class="form-group">
                                                        <label for="name1"> RO's Name</label>
                                                        <input type="text" class="form-control" id="name1" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="depart1"> RO Designation: </label>
                                                        <input type="text" class="form-control" id="depart1" />
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="review-section personal-excellence">
                    <div class="review-header text-center">
                        <h3 class="review-title">Personal Excellence</h3>
                        <p class="text-muted">Lorem ipsum dollar</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered review-table">
                                    <thead>
                                        {/* <tr>
                                    <th style={{width:"40px"}}>#</th>
                                    <th>Personal Attributes</th>
                                    <th>Key Indicators</th>
                                    <th>Weightage</th>
                                    <th>Percentage achieved </br>( self Score )</th>
                                <th>Points Scored </br>( self )</th>
                            <th>Percentage achieved </br>( RO's Score )</th>
                        <th>Points Scored </br>( RO )</th>
                                        </tr> */}
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowspan="2">1</td>
                                            <td rowspan="2">Attendance</td>
                                            <td>Planned or Unplanned Leaves</td>
                                            <td><input type="text" class="form-control" readonly="" value="2" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                        </tr>
                                        <tr>
                                            <td>Time Consciousness</td>
                                            <td><input type="text" class="form-control" readonly="" value="2" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                        </tr>
                                        <tr>
                                            <td rowspan="2">2</td>
                                            <td rowspan="2">Attitude &amp; Behavior</td>
                                            <td>Team Collaboration</td>
                                            <td><input type="text" class="form-control" readonly="" value="2" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                        </tr>
                                        <tr>
                                            <td>Professionalism &amp; Responsiveness</td>
                                            <td><input type="text" class="form-control" readonly="" value="2" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Policy &amp; Procedures </td>
                                            <td>Adherence to policies and procedures</td>
                                            <td><input type="text" class="form-control" readonly="" value="2" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Initiatives</td>
                                            <td>Special Efforts, Suggestions,Ideas,etc.</td>
                                            <td><input type="text" class="form-control" readonly="" value="2" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Continuous Skill Improvement</td>
                                            <td>Preparedness to move to next level &amp; Training utilization</td>
                                            <td><input type="text" class="form-control" readonly="" value="3" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" class="text-center">Total </td>
                                            <td><input type="text" class="form-control" readonly="" value="15" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                            <td><input type="text" class="form-control" readonly="" value="0" /></td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" class="text-center"><b>Total Percentage(%)</b></td>
                                            <td colspan="5" class="text-center"><input type="text" class="form-control" readonly="" value="0" /></td>
                                        </tr>
                                        <tr>
                                            <td colspan="8" class="text-center">
                                                <div class="grade-span">
                                                    <h4>Grade</h4>
                                                    <span class="badge bg-inverse-danger">Below 65 Poor</span>
                                                    <span class="badge bg-warning-light">65-74 Average</span>
                                                    <span class="badge bg-inverse-warning">75-84 Satisfactory</span>
                                                    <span class="badge bg-inverse-info">85-92 Good</span>
                                                    <span class="badge bg-inverse-success">Above 92 Excellent</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div >
                        </div >
                    </div >
                </section >

                <section class="review-section">
                    <div class="review-header text-center">
                        <h3 class="review-title">Special Initiatives, Achievements, contributions if any</h3>
                        <p class="text-muted">Lorem ipsum dollar</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered table-review review-table" id="table_achievements">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "40px" }}>#</th>
                                            <th>By Self</th>
                                            <th>RO's Comment</th>
                                            <th>HOD's Comment</th>
                                            <th style={{ width: "64px" }}><button type="button" class="btn btn-primary btn-add-row"><i class="fa fa-plus"></i></button></th>
                                        </tr>
                                    </thead>
                                    <tbody id="table_achievements_tbody">
                                        <tr>
                                            <td>1</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="review-section">
                    <div class="review-header text-center">
                        <h3 class="review-title">Comments on the role</h3>
                        <p class="text-muted">alterations if any requirred like addition/deletion of responsibilities</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered table-review review-table" id="table_alterations">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "40px" }}>#</th>
                                            <th>By Self</th>
                                            <th>RO's Comment</th>
                                            <th>HOD's Comment</th>
                                            <th style={{ width: "64px" }}><button type="button" class="btn btn-primary btn-add-row"><i class="fa fa-plus"></i></button></th>
                                        </tr>
                                    </thead>
                                    <tbody id="table_alterations_tbody">
                                        <tr>
                                            <td>1</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="review-section">
                    <div class="review-header text-center">
                        <h3 class="review-title">Comments on the role</h3>
                        <p class="text-muted">alterations if any requirred like addition/deletion of responsibilities</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered review-table">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "40px" }}>#</th>
                                            <th>Strengths</th>
                                            <th>Area's for Improvement</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="review-section">
                    <div class="review-header text-center">
                        <h3 class="review-title">Appraisee's Strengths and Areas for Improvement perceived by the Reporting officer</h3>
                        <p class="text-muted">Lorem ipsum dollar</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered review-table">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "40px" }}>#</th>
                                            <th>Strengths</th>
                                            <th>Area's for Improvement</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="review-section">
                    <div class="review-header text-center">
                        <h3 class="review-title">Appraisee's Strengths and Areas for Improvement perceived by the Head of the Department</h3>
                        <p class="text-muted">Lorem ipsum dollar</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered review-table">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "40px" }}>#</th>
                                            <th>Strengths</th>
                                            <th>Area's for Improvement</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="review-section">
                    <div class="review-header text-center">
                        <h3 class="review-title">Personal Goals</h3>
                        <p class="text-muted">Lorem ipsum dollar</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered review-table">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "40px" }}>#</th>
                                            <th>Goal Achieved during last year</th>
                                            <th>Goal set for current year</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="review-section">
                    <div class="review-header text-center">
                        <h3 class="review-title">Personal Updates</h3>
                        <p class="text-muted">Lorem ipsum dollar</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered review-table">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "40px" }}>#</th>
                                            <th>Last Year</th>
                                            <th>Yes/No</th>
                                            <th>Details</th>
                                            <th>Current Year</th>
                                            <th>Yes/No</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Married/Engaged?</td>
                                            <td>
                                                <select class="form-control select select2-hidden-accessible" data-select2-id="1" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="3">Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-7hs3-container"><span class="select2-selection__rendered" id="select2-7hs3-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td>Marriage Plans</td>
                                            <td>
                                                <select class="form-control select select2-hidden-accessible" data-select2-id="4" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="6">Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="5" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-6dn8-container"><span class="select2-selection__rendered" id="select2-6dn8-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Higher Studies/Certifications?</td>
                                            <td>
                                                <select class="form-control select select2-hidden-accessible" data-select2-id="7" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="9">Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="8" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-rh44-container"><span class="select2-selection__rendered" id="select2-rh44-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td>Plans For Higher Study</td>
                                            <td>
                                                <select class="form-control select select2-hidden-accessible" data-select2-id="10" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="12">Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="11" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-91b3-container"><span class="select2-selection__rendered" id="select2-91b3-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Health Issues?</td>
                                            <td>
                                                <select class="form-control select select2-hidden-accessible" data-select2-id="13" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="15">Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="14" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-psty-container"><span class="select2-selection__rendered" id="select2-psty-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td>Certification Plans</td>
                                            <td>
                                                <select class="form-control select select2-hidden-accessible" data-select2-id="16" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="18">Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="17" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-xzit-container"><span class="select2-selection__rendered" id="select2-xzit-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Others</td>
                                            <td>
                                                <select class="form-control select select2-hidden-accessible" data-select2-id="19" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="21">Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="20" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-ir1o-container"><span class="select2-selection__rendered" id="select2-ir1o-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td>Others</td>
                                            <td>
                                                <select class="form-control select select2-hidden-accessible" data-select2-id="22" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="24">Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="23" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-37in-container"><span class="select2-selection__rendered" id="select2-37in-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="review-section">
                    <div class="review-header text-center">
                        <h3 class="review-title">Professional Goals Achieved for last year</h3>
                        <p class="text-muted">Lorem ipsum dollar</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered table-review review-table" id="table_goals">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "40px" }}>#</th>
                                            <th>By Self</th>
                                            <th>RO's Comment</th>
                                            <th>HOD's Comment</th>
                                            <th style={{ width: "64px" }}><button type="button" class="btn btn-primary btn-add-row"><i class="fa fa-plus"></i></button></th>
                                        </tr>
                                    </thead>
                                    <tbody id="table_goals_tbody">
                                        <tr>
                                            <td>1</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="review-section">
                    <div class="review-header text-center">
                        <h3 class="review-title">Professional Goals for the forthcoming year</h3>
                        <p class="text-muted">Lorem ipsum dollar</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered table-review review-table" id="table_forthcoming">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "40px" }}>#</th>
                                            <th>By Self</th>
                                            <th>RO's Comment</th>
                                            <th>HOD's Comment</th>
                                            <th style={{ width: "64px" }}><button type="button" class="btn btn-primary btn-add-row"><i class="fa fa-plus"></i></button></th>
                                        </tr>
                                    </thead>
                                    <tbody id="table_forthcoming_tbody">
                                        <tr>
                                            <td>1</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="review-section">
                    <div class="review-header text-center">
                        <h3 class="review-title">Training Requirements</h3>
                        <p class="text-muted">if any to achieve the Performance Standard Targets completely</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered table-review review-table" id="table_targets">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "40px" }}>#</th>
                                            <th>By Self</th>
                                            <th>RO's Comment</th>
                                            <th>HOD's Comment</th>
                                            <th style={{ width: "64px" }}><button type="button" class="btn btn-primary btn-add-row"><i class="fa fa-plus"></i></button></th>
                                        </tr>
                                    </thead>
                                    <tbody id="table_targets_tbody">
                                        <tr>
                                            <td>1</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="review-section">
                    <div class="review-header text-center">
                        <h3 class="review-title">Any other general comments, observations, suggestions etc.</h3>
                        <p class="text-muted">Lorem ipsum dollar</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered table-review review-table" id="general_comments">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "40px" }}>#</th>
                                            <th>Self</th>
                                            <th>RO</th>
                                            <th>HOD</th>
                                            <th style={{ width: "64px" }}><button type="button" class="btn btn-primary btn-add-row"><i class="fa fa-plus"></i></button></th>
                                        </tr>
                                    </thead>
                                    <tbody id="general_comments_tbody">
                                        <tr>
                                            <td>1</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="review-section">
                    <div class="review-header text-center">
                        <h3 class="review-title">For RO's Use Only</h3>
                        <p class="text-muted">Lorem ipsum dollar</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered review-table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Yes/No</th>
                                            <th>If Yes - Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>The Team member has Work related Issues</td>
                                            <td>
                                                <select class="form-control select select2-hidden-accessible" data-select2-id="25" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="27">Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="26" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-z585-container"><span class="select2-selection__rendered" id="select2-z585-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>The Team member has Leave Issues</td>
                                            <td>
                                                <select class="form-control select select2-hidden-accessible" data-select2-id="28" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="30">Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="29" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-qfin-container"><span class="select2-selection__rendered" id="select2-qfin-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>The team member has Stability Issues</td>
                                            <td>
                                                <select class="form-control select select2-hidden-accessible" data-select2-id="31" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="33">Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="32" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-uypx-container"><span class="select2-selection__rendered" id="select2-uypx-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>The Team member exhibits non-supportive attitude</td>
                                            <td>
                                                <select class="form-control select select2-hidden-accessible" data-select2-id="34" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="36">Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="35" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-jitz-container"><span class="select2-selection__rendered" id="select2-jitz-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>Any other points in specific to note about the team member</td>
                                            <td>
                                                <select class="form-control select select2-hidden-accessible" data-select2-id="37" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="39">Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="38" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-txie-container"><span class="select2-selection__rendered" id="select2-txie-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>Overall Comment /Performance of the team member</td>
                                            <td>
                                                <select class="form-control select select2-hidden-accessible" data-select2-id="40" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="42">Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="41" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-7j22-container"><span class="select2-selection__rendered" id="select2-7j22-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="review-section">
                    <div class="review-header text-center">
                        <h3 class="review-title">For HRD's Use Only</h3>
                        <p class="text-muted">Lorem ipsum dollar</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered review-table">
                                    <thead>
                                        <tr>
                                            <th>Overall Parameters</th>
                                            <th>Available Points</th>
                                            <th>Points Scored</th>
                                            <th>RO's Comment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>KRAs Target Achievement Points (will be considered from the overall score specified in this document by the Reporting officer)</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>Professional Skills Scores(RO's Points furnished in the skill &amp; attitude assessment sheet will be considered)</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>Personal Skills Scores(RO's Points furnished in the skill &amp; attitude assessment sheet will be considered)</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>Special Achievements Score (HOD to furnish)</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <td>Overall Total Score</td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered review-table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Signature</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Employee</td>
                                        <td><input type="text" class="form-control" /></td>
                                        <td><input type="text" class="form-control" /></td>
                                        <td><input type="text" class="form-control" /></td>
                                    </tr>
                                    <tr>
                                        <td>Reporting Officer</td>
                                        <td><input type="text" class="form-control" /></td>
                                        <td><input type="text" class="form-control" /></td>
                                        <td><input type="text" class="form-control" /></td>
                                    </tr>
                                    <tr>
                                        <td>HOD</td>
                                        <td><input type="text" class="form-control" /></td>
                                        <td><input type="text" class="form-control" /></td>
                                        <td><input type="text" class="form-control" /></td>
                                    </tr>
                                    <tr>
                                        <td>HRD</td>
                                        <td><input type="text" class="form-control" /></td>
                                        <td><input type="text" class="form-control" /></td>
                                        <td><input type="text" class="form-control" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div >
        </React.Fragment>
    )
}
