import style from "./navbar-user.module.css";
import { useSelector } from "react-redux";
import { getUsre } from "redux/auth/auth-selector";

const NavBarUser = () => {
    const { name } = useSelector(getUsre);
    return (
        <div>
            {name}, <button>Logout</button>
        </div>
    )
}

export default NavBarUser