import"bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Footer() {
    return(
                    <footer class="navbar navbar-light bg-success">
                         <Link class="navbar-brand" to="/">
                           <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
                          Bootstrap
                         </Link>
                   </footer>
    );
}

export default Footer;