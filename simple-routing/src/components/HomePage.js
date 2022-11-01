import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Users from '../data/data';

function HomePage() {
    const [users, set_users] = useState(Users);

    // useEffect(() => {
    //     fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb')
    //         .then(response => response.json())
    //         .then(data => {
    //             set_users(data.results[0]);
    //             console.log(data.results[0]);
    //         })
    // }, [])

    return (
        <div>
            <h1>Welcome here to Demo app</h1>


            <div className='contact-card'>
                {
                    users.map((user, index) => (
                        <Link to={`accounts/${user.first}`} key={index}>
                            <div>
                                {`${user.first} ${user.last}`}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default HomePage;