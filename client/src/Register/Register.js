import './Register.css'
import { Link } from "react-router-dom"
import {useState} from "react";
import axios from "axios";

function Register(props) {

    const [person,setPerson]=useState("");
    function handleChange(e, label){
        console.log(e.target.value)
        setPerson({...person,[label]: e.target.value })

    }
    async function handleSubmit(e){
        e.preventDefault()
        console.log(person)
        const response = (await axios.post("http://localhost:8000/api/register",person)).data;
        if (response.access_token === undefined){
            alert('Error');
        }else{
            console.log(response.token);
            setcookie('td05',{name: response.name, token: response.token},"/");
        }


    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-div">
                <label for="name">Name: </label>
                <input type="text" name="name" id="name" required onChange={e => handleChange(e, "name")}></input>
            </div>
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
                <Link to="/login"><input type="button" value="Already have an account ?"></input></Link>
            </div>


        </form>
    );
}

export default Register;