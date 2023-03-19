/* eslint-disable react/no-typos */
import PropTypes from "prop-types";
import style from "./contact-list.module.css";

const ContactList = ({ removeContact, items }) => {
    const contacts = items.map(({ id, name, number }) => <li className={style.items} key={id}>{name}: {number}
        <button className={style.btn} onClick={() => removeContact(id)} type="button">delete</button></li>)
    return (
        <ul >
            {contacts}
        </ul>
    )
}


export default ContactList;


ContactList.defaultProps = {
    items: []
}

ContactList.propTypes = {
    removeContact: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }))
}


