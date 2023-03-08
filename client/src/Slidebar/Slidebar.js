import './Slidebar.css'
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom"


function Slidebar() {

    return (
        <>
            <Menu right>
                <Link to="/search" id="search"><a className="menu-item" href="/"> Search <i className='bx bx-search' style={{color: "red"}}></i></a></Link>
                <Link to ="/home"><a id="home" className="menu-item" href="/home">Home</a></Link>
                <Link to="/articles" id="about"><a className="menu-item" href="/articles">Articles</a></Link>
                <Link to="/contact"><a id="contact" className="menu-item" href="/contact">Contact</a></Link>
            </Menu>
        </>
    );
}

export default Slidebar
