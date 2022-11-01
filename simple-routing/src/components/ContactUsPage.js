import React from 'react';
import { Link } from 'react-router-dom';

function ContactUsPage() {
    return (<div>
        This is the Contact Us page

        <ul>
            <li> <Link to="/contact/nitin">Contact Nitin</Link> </li>
            <li> <Link to="/contact/nitin?loggedin=yes">Contact Nitin (Logged In)</Link> </li>
        </ul>
    </div>);
}

export default ContactUsPage;
