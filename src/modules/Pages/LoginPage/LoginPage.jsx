
import { useDispatch } from "react-redux";
import { login } from "../../../redux/auth/auth-operation";
import style from "./login-page.module.css";
import LoginForm from "modules/LoginForm/LoginForm";
import PhonebookAuth from "modules/Phonebook/NavBarAuth/PhonebookAuth";

const LoginPage = () => {

    const dispatch = useDispatch();
    const handelLogin = (data) => {
        dispatch(login(data));
    }



    return (
        <div className="container">
            <PhonebookAuth />
            <h1 className={style.pagetitel}>Login Page</h1>
            <LoginForm onSubmit={handelLogin} />
        </div>
    )
}

export default LoginPage;