import './Login.css'
import { Link } from "react-router-dom"


function Login() {

    return (
        <form action="" method="get" class="form">
            <div class="form-div">
                <label for="name">Name: </label>
                <input type="text" name="name" id="name" required></input>
            </div>
            <div class="form-div">
                <label for="email">Email: </label>
                <input type="email" name="email" id="email" required></input>
            </div>
            <div class="form-div">
                <label for="password">Password: </label>
                <input type="password" name="password" id="password" required></input>
            </div>
            <div class="form-div">
                <input type="submit" value="Login"></input>
            </div>
            <div class="form-div">
            <Link to="/register"><input type="button" value="Already have an account ?"></input></Link>
            </div>
            

        </form>
    );
}

export default Login;