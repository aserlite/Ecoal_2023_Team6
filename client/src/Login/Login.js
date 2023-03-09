import './Login.css'
import {Link} from "react-router-dom"
import {useState} from "react";
import {useCookies} from "react-cookie";
import axios from "axios";



function Login() {

    return (
        <form className="form">
            <div className="form-div">
                <label for="email">Email: </label>
                <input type="email" name="email" id="email" required></input>
            </div>
            <div className="form-div">
                <label for="password">Password: </label>
                <input type="password" name="password" id="password" required></input>
            </div>
            <div className="form-div">
                <input type="submit" value="Login" ></input>
            </div>
            <div className="form-div">
            <Link to="/register"><input type="button" value="Already have an account ?"></input></Link>
            </div>
            

        </form>
    );
}

export default Login;