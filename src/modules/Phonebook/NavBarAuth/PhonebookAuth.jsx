
import { NavLink } from "react-router-dom";
import style from "./phonebook-auth.module.css";

const PhonebookAuth = () => {
    return (
        <div>
            <NavLink to="/register" className={style.link}>Register</NavLink> |
            <NavLink to="/login" className={style.link}>Login</NavLink>
        </div>
    )
}

export default PhonebookAuth;