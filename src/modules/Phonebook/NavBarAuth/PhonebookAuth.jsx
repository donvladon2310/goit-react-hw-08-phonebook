import { NavLink } from "react-router-dom";
import style from "./phonebook-auth.module.css";

const PhonebookAuth = () => {
    return (
        <div className={style.headernav}>
            <NavLink to="/register" className={style.link}>Register</NavLink>
            <NavLink to="/login" className={style.link}>Login</NavLink>
            <p className={style.text}>Registration and login are required to continue using the website</p>
        </div>
    )
}

export default PhonebookAuth;