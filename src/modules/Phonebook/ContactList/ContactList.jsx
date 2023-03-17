/* eslint-disable react/no-typos */
import PropTypes from "prop-types";
import style from "./contact-list.module.css";

const ContactList = ({ removeContact, items }) => {
    const contacts = items.map(({ _id, name, phone }) => <li className={style.items} key={_id}>{name}: {phone}
        <button className={style.btn} onClick={() => removeContact(_id)} type="button">delete</button></li>)

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

ContactList.PropTypes = {
    removeContact: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequireds,
        name: PropTypes.string.isRequireds,
        phone: PropTypes.string.isRequireds,
    }))
}

