import './Login.css'
import {Link} from "react-router-dom"
import {useState} from "react";
import {useCookies} from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();

    const [person,setPerson]=useState("");
    function handleChange(e, label){
        console.log(e.target.value)
        setPerson({...person,[label]: e.target.value })

    }
    async function handleSubmit(e){
        e.preventDefault()
        console.log(person)
        const response = (await axios.post("http://localhost:8000/api/login",person)).data;
        if (response.access_token == undefined){
            alert('Error');
        }else{
            console.log(response.access_token);
            props.setCookie('td05',{name: response.name, access_token: response.access_token},"/");
            navigate("/");
        }


    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-div">
                <label for="email">Email: </label>
                <input type="email" name="email" id="email" required  onChange={e => handleChange(e, "email")}></input>
            </div>
            <div className="form-div">
                <label for="password">Password: </label>
                <input type="password" name="password" id="password" required onChange={e => handleChange(e, "password")}></input>
            </div>
            <div className="form-div">
                <input type="submit" value="Login" ></input>
            </div>
            <div className="form-div">
            <Link to="/register"><input type="button" value="Don't have an account ?"></input></Link>
            </div>
            

        </form>
    );
}

export default Login;