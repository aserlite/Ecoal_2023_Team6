import './Slidebar.css'
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";



function Slidebar(props) {
    let loginbutton;
    if (props.cookies.td05 === undefined){
        loginbutton = <Link to="/login" id="login"><a className="menu-item login_menu_item" href="/login"><AiOutlineUserAdd /> </a></Link>;
    }else{
        loginbutton = <Link to="/login" id="login"><a className="menu-item login_menu_item" href="/login"><AiOutlineUserAdd /> </a></Link>;
    }
    return (
        <>
            <div className="outer_container">
                <Menu right>
                    <div className="icons_bar">
                        {loginbutton}
                        <Link to="/search" id="search"><a className="menu-item" href="/"> <BsSearch /></a></Link>

                    </div>
                    <div className="itmC">
                    <Link to="/"><a id="home" className="menu-item" href="/home">Home</a></Link> <br/> <br/>
                    <Link to="/articles" id="articles"><a className="menu-item" href="/articles">Articles</a></Link> <br/> <br/>
                    <Link to="/latest" id="latest"><a className="menu-item" href="/latest">Latests Posts</a></Link> <br/> <br/>
                    <Link to="/about" id="about"><a className="menu-item" href="/about">About Us</a></Link><br/> <br/></div>
                </Menu>
            </div>
        </>
    );
}

export default Slidebar
