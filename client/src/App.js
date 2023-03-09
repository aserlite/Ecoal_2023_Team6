import { Route, Link, Routes } from "react-router-dom"
import './App.css';
import Home from "./Home/Home";
import Articles from "./Articles/Articles";
import Slidebar from "./Slidebar/Slidebar";
import logo from './logos/logoW.png';
import Search from "./Search/Search";
import Login from "./Login/Login"
import Register from "./Register/Register";
import Add from "./Add/Add";
import Update from "./Update/Update";
import UpdateA from "./UpdateA/UpdateA";
import Delete from "./Delete/Delete";
import Admin from "./Admin/Admin";
import Article from "./Article/Article";
import About from "./About/About";
import { useCookies } from 'react-cookie';

function App() {

  const [cookies, setCookie, removeCookie] = useCookies(['mycookie']);

  return (
    <>
      <Slidebar />

      <nav>
        <Link to="/" className='home'><img className="logo" src={logo} alt="Logo" /></Link>
        <Link to="/login" className='home'></Link>
      </nav>


      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/articles" element={<Articles />} />
        <Route exact={true} path="/article/:id" element={<Article />} />
        <Route exact={true} path="/search" element={<Search />} />
        <Route exact={true} path="/login" element={<Login setCookie={setCookie} />} />
        <Route exact={true} path="/register" element={<Register setCookie={setCookie} />} />
        <Route exact={true} path="/add" element={<Add cookies={cookies} />} />
        <Route exact={true} path="/admin" element={<Admin cookies={cookies} />} />
          <Route exact={true} path="/update" element={<Update cookies={cookies} />} />
          <Route exact={true} path="/update/:id" element={<UpdateA cookies={cookies} />} />
        <Route exact={true} path="/delete" element={<Delete cookies={cookies} />} />
        <Route exact={true} path="/about" element={<About />} />

        <Route path="*" element={() => <p>Page Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;