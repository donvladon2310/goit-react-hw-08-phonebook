/* eslint-disable react/no-typos */
import PropTypes from 'prop-types'


const ContactList = ({ removeContact, items }) => {
    const contacts = items.map(({ _id, name, phone }) => <li key={_id}>{name}: {phone}
        <button onClick={() => removeContact(_id)} type="button">delete</button></li>)

    return (
        <ul>
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

