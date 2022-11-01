import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

function Nitin() {
    const search = useLocation().search;
    const loggedin = new URLSearchParams(search).get('loggedin');

    return (  
    <div>
        <h2>
            Hi this is Nitin!
        </h2>

        {
            loggedin === 'yes'
                ? <h5>Please contact me on +91 - 9898989898</h5>
                : <h5>Please contact me on my email: nitin@abc.in</h5>
        }
            
    </div>);
}

export default Nitin;