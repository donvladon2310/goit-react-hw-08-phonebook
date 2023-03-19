import PhonebookAuth from "modules/Phonebook/NavBarAuth/PhonebookAuth";
import RegisterForm from "modules/RegisterForm/RegisterForm";
import { useDispatch } from "react-redux";
import { signup } from "../../../redux/auth/auth-operation";
import style from "./register-psge.module.css"
const RegisterPage = () => {
    const dispatch = useDispatch();
    const handelSignup = (data) => {
        dispatch(signup(data));
    }

    return (
        <div className="container">
            <PhonebookAuth />
            <h1 className={style.pagetitel}>Register Page</h1>
            <RegisterForm onSubmit={handelSignup} />
        </div>
    )
}

export default RegisterPage;