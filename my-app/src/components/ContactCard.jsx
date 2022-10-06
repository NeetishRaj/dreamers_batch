import './ContactCard.css';

const ContactCard = (props) => {
    console.log(props.user);

    return (
        <div className='card'>
            <h1>{props.user.name}</h1>
            <h3>{props.user.email}</h3>
            <h3>{props.user.company}, {props.user.country}</h3>
        </div>
    )
}

export default ContactCard;