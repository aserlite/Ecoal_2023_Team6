import './Slidebar.css'
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom"


function Slidebar() {

    return (
        <>
            <Menu right>
                <Link to="/search" id="search"><a className="menu-item" href="/"> Search <i className='bx bx-search' style={{color: "red"}}></i></a></Link>
                <a id="home" className="menu-item" href="/">Home</a>
                <Link to="/articles" id="about"><a className="menu-item" href="/articles">Articles</a></Link>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
        </>
    );
}

export default Slidebar
