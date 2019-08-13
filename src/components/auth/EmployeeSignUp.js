<form className="form-group" onSubmit={this.handleSubmit}>
    <div className="row">
        <div className="col-md-2">Email: </div>
        <div className="col-md-8">
            <input type="text" className="form-control" id="email" placeholder="Email" onChange={this.handleChange} required />
        </div>
    </div><br /><br />
    <div className="row">
        <div className="col-md-2">Password: </div>
        <div className="col-md-8">
            <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} required />
        </div>
    </div><br /><br />
    <div className="row">
        <div className="col-md-2"> </div>
        <div className="col-md-8">
            <button className="mb-2 btn btn-primary mr-2 col-md-12 glyphicons glyphicons-star" disabled={this.state.isLoading ? true : false}>
                {this.state.isLoading ? <span><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Loading...</span> : "Login"}
            </button><br /><br />
            <div className="row">
                <div className="col-md-6">Not an <b>Admin</b> yet? <Link to='/register'>Create an Account</Link></div>
                <div className="col-md-6">Forget Password?    <b style={{ textDecoration: "underline", color: "royalblue", cursor: "pointer" }} data-toggle="modal" data-target="#exampleModal">Reset here</b> </div>
            </div>
            <div></div>
        </div>
    </div><br /><br />
</form>