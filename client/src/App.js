import { Route, Link, Routes } from "react-router-dom"
import './App.css';
import Home from "./Home/Home";
import Articles from "./Articles/Articles";
import Slidebar from "./Slidebar/Slidebar";
import logo from './logo.jpeg'; 


function App() {

  return (
    <>
      <Slidebar/>
        
      <nav>
        
        <Link to="/" className='home'><img className="logo" src={logo} alt="Logo" /></Link>
      </nav>



      <Routes>
        <Route exact={true} path="/" element={<Home/>} />

        <Route exact={true} path="/articles" element={<Articles />} />

        <Route path="*" element={() => <p>Page Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;
