import { Route, Link, Routes } from "react-router-dom"
import './App.css';
import Home from "./Home/Home"


function App() {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
      </nav>

      <Routes>
        <Route exact={true} path="/home" element={<Home/>} />
        <Route path="*" element={() => <p>Page Not Found</p>} />
      </Routes>
    </>
  );
}
 
export default App;
