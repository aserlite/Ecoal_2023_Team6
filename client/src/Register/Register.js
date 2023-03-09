import './Register.css'
import { Link } from "react-router-dom"

function Register() {

    return (
        <form action="" method="get" className="form">
            <div className="form-div">
                <label for="email">Email: </label>
                <input type="email" name="email" id="email" required></input>
            </div>
            <div className="form-div">
                <label for="password">Password: </label>
                <input type="password" name="password" id="password" required></input>
            </div>
            <div className="form-div">
                <input type="submit" value="Register"></input>
            </div>
            <div className="form-div">
            <Link to="/login"><input type="button" value="Don't have an account ?"></input></Link>
            </div>
        </form>
    );
}

export default Register;