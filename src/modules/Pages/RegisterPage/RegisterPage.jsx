import RegisterForm from "modules/RegisterForm/RegisterForm";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../../redux/auth/auth-operation";
import { NavLink } from "react-router-dom";
import { isUserLogin } from "redux/auth/auth-selector";
import { Navigate } from "react-router-dom";

const RegisterPage = () => {
    const isLogin = useSelector(isUserLogin);
    const dispatch = useDispatch();
    const handelSignup = (data) => {
        dispatch(signup(data));
    }
    if (isLogin) {
        return <Navigate to="/" />
    }


    return (
        <div className="container">
            <NavLink to="/"><button >back</button></NavLink>
            <h1 className="page-titel">Register Page</h1>
            <RegisterForm onSubmit={handelSignup} />
        </div>
    )
}

export default RegisterPage;