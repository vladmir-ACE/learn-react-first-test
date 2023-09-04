import {Routes, Route ,Link} from "react-router-dom"
import Home from "../pages/Home/Home";
import About from "../pages/about/about";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Layout() {
    return (
      <div className="App">
      <Header/>
    <Link to="/">Home</Link>  <Link to="/about">About</Link> 
    <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/about"element={<About/>}/>
    </Routes>
     
      <Footer/>
      
      </div>
    );
  }
  
  export default Layout ;
  