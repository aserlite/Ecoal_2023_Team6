import './Slidebar.css'
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom"


function Slidebar() {

    return (
        <>
            <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
                <Link to="/articles"><a id="about" className="menu-item" href="/articles">Articles</a></Link>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
        </>
    );
}

export default Slidebar