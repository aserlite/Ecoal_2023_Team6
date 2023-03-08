import './Register.css'
import { Link } from "react-router-dom"

function Register() {

    return (
        <form action="" method="get" class="form">
            <div class="form-div">
                <label for="email">Email: </label>
                <input type="email" name="email" id="email" required></input>
            </div>
            <div class="form-div">
                <label for="password">Password: </label>
                <input type="password" name="password" id="password" required></input>
            </div>
            <div class="form-div">
                <input type="submit" value="Register"></input>
            </div>
            <div class="form-div">
            <Link to="/login"><input type="button" value="Don't have an account ?"></input></Link>
            </div>
        </form>
    );
}

export default Register;