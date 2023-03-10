import './Admin.css'
import { Route, Link, Routes } from "react-router-dom"
import Delete from "../Delete/Delete";

function Admin(props) {
    return (
        <div className="adminPanel">
            <Link to="/add">Add Article</Link>
            <Link to="/update">Update</Link>
            <Link to="/delete">Delete</Link>
        </div>
);
}

export default Admin;