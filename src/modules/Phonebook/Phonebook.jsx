import { useEffect } from "react";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import { useSelector, useDispatch } from "react-redux";
import PhonebookAuth from 'modules/Phonebook/NavBarAuth/PhonebookAuth';
import UserMenu from "./UserMenu/UserMenu";
import { isUserLogin } from "redux/auth/auth-selector";
import { setFilter } from "redux/filter/filter-slice";
import { getFilteredContacts } from "redux/contacts/contacts-selectors";
import { getFilter } from "redux/filter/filter-selectors";
import { fetchAllContacts, fetchAddContact, fetchDeleteContact } from "redux/contacts/contacts-operatins";
import style from "./phonebook.module.css";

const Phonebook = () => {

    const filteredContacts = useSelector(getFilteredContacts);

    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllContacts())
    }, [dispatch])

    const onAddContact = ({ name, number }) => {
        dispatch(fetchAddContact({ name, number }));
    }

    const onRemoveContact = (id) => {
        dispatch(fetchDeleteContact(id));
    }

    const handelFilter = ({ target }) => {
        dispatch(setFilter(target.value))
    };
    const isLogin = useSelector(isUserLogin);

    return (
        <div>
            {!isLogin && <PhonebookAuth />}
            {isLogin && <UserMenu className={style.menu} />}
            <h3 className={style.title}>Phonebook</h3>
            <div>
                <div className={style.wrapper}>

                    <ContactForm onSubmit={onAddContact} />
                </div>
                <div>
                    <Filter value={filter} handelChange={handelFilter} />
                    <ContactList removeContact={onRemoveContact} items={filteredContacts} />
                </div>
            </div>
        </div>
    )

}

export default Phonebook;



