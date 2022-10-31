import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/"><div>Home</div></Link>
            <Link to="/search"><div>Search</div></Link>
            <Link to="/about"><div>About Us</div></Link>
            <Link to="/contact"><div>Contact Us</div></Link>
        </nav>
    );
}

export default Navbar;