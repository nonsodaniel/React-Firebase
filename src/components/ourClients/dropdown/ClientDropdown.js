import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Category extends Component {

    render() {
        return (
            <ul className="nav flex-column">

                <li className="nav-item" style={{ background: "#f5f5f5" }}>
                    <NavLink to='/add-client' className="nav-link">
                        <i className="material-icons">note_add</i>
                        <span>Add  Client</span>
                    </NavLink>
                </li>

                <li className="nav-item" style={{ background: "#f5f5f5" }}>
                    <NavLink to='/view-clients' className="nav-link " >
                        <i className="material-icons">note_add</i>
                        <span>View Clients</span>
                    </NavLink>
                </li>
            </ul>


        )
    }
}



export default Category
