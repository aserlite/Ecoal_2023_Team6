import './Slidebar.css'
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom"
import {BsSearch} from "react-icons/bs";


function Slidebar() {

    return (
        <>
            <div className="outer_container">
            <Menu right>
                <Link to="/search" id="search"><a className="menu-item" href="/"> <BsSearch /></a></Link>
                <Link to ="/"><a id="home" className="menu-item" href="/home">Home</a></Link>
                <Link to="/articles" id="about"><a className="menu-item" href="/articles">Articles</a></Link>
                <Link to="/login" id="about"><a className="menu-item" href="/login">Login</a></Link>
            </Menu>
            </div>
        </>
    );
}

export default Slidebar
