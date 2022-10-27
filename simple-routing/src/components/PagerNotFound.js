import { Link } from "react-router-dom";

function PageNotFound() {
    return (  
    <div>
        <h1> This page does not exist</h1>

        <Link to="/">Go back to Home page</Link>
    </div>);
}


export default PageNotFound;