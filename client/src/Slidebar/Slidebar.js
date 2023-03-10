import './Slidebar.css'
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";



function Slidebar() {

    return (
        <>
            <div className="outer_container">
                <Menu right>
                    <div className="icons_bar">
                        <Link to="/login" id="login"><a className="menu-item login_menu_item" href="/login"><AiOutlineUserAdd /> </a></Link>

                        <Link to="/search" id="search"><a className="menu-item" href="/"> <BsSearch /></a></Link>

                    </div>
                    <Link to="/"><a id="home" className="menu-item" href="/home">Home</a></Link>
                    <Link to="/articles" id="articles"><a className="menu-item" href="/articles">Articles</a></Link>
                    <Link to="/latest" id="latest"><a className="menu-item" href="/latest">Latests Posts</a></Link>
                    <Link to="/about" id="about"><a className="menu-item" href="/about">About Us</a></Link>
                </Menu>
            </div>
        </>
    );
}

export default Slidebar
