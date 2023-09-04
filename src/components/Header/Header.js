import"bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Header() {
    return(
        <nav className="navbar navbar-expand-lg bg-dark d-flex justify-content-between">

            <div>
            <Link className="navbar-brand text-white" to="/">Navbar</Link>
            </div>

            <div classNameName="">
               <ul className="nav ">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">HOME</Link>
                        
                    </li>
                    <li className="nav-item">
                    <  Link to="/about" className="nav-link">ABOUT</Link>
                        
                    </li>
                    
                </ul>
            </div>


            
        </nav>
    );
    
}

export default Header;