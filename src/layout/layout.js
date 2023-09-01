import {Routes, Route ,Link} from "react-router-dom"
import Home from "../pages/Home/Home";
import About from "../pages/about/about";

function Layout() {
    return (
      <div className="App">
     <h1>Header</h1>  
    <Link to="/">Home</Link>  <Link to="/about">About</Link> 
    <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/about"element={<About/>}/>
    </Routes>
     
      <h1>footer</h1>
      </div>
    );
  }
  
  export default Layout ;
  