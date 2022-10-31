import React from 'react';
import { Link } from 'react-router-dom';

function ContactUsPage() {
    return (<div>
        This is the Contact Us page

        <ul>
            <li> <Link to="/contact/nitin">Contact Nitin</Link> </li>
        </ul>
    </div>);
}

export default ContactUsPage;
