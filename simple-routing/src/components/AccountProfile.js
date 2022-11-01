import { useParams } from 'react-router-dom';
import Users from '../data/data';

function AccountProfile() {
    let { accountName } = useParams();
    
    let user = Users.find(item => item.first === accountName);

    if(!user) {
        return <div>User not found</div>
    }

    return ( 
        <div>
            <h1>Welcome!  {`${user.first} ${user.last}`}</h1>
            <hr />

            Email: {user.email}

        </div>
    );
}

export default AccountProfile;