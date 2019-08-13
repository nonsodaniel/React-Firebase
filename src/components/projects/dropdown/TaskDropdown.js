import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Category extends Component {

    render() {
        return (
            <ul className="nav flex-column">

                <li className="nav-item" style={{ background: "#f5f5f5" }}>
                    <NavLink to='/add-task' className="nav-link">
                        <i className="material-icons">note_add</i>
                        <span>Add  Task</span>
                    </NavLink>
                </li>

                <li className="nav-item" style={{ background: "#f5f5f5" }}>
                    <NavLink to='/view-tasks' className="nav-link " >
                        <i className="material-icons">note_add</i>
                        <span>View Tasks</span>
                    </NavLink>
                </li>
            </ul>


        )
    }
}



export default Category
