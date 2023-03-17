// import style from "./navbar-user.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "redux/auth/auth-operation";
import { getUser } from "redux/auth/auth-selector";
import style from "./user-menu.module.css"

const UserMenu = () => {
    const { email } = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <div>
            Hello, {email}! <button className={style.btn} onClick={onLogout}>Logout</button>
        </div>
    )
}

export default UserMenu;