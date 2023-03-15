
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../redux/auth/auth-operation";
import { NavLink } from "react-router-dom";
import { isUserLogin } from "redux/auth/auth-selector";
import { Navigate } from "react-router-dom";
import LoginForm from "modules/LoginForm/LoginForm";

const LoginPage = () => {
    const isLogin = useSelector(isUserLogin);
    const dispatch = useDispatch();
    const handelLogin = (data) => {
        dispatch(login(data));
    }
    if (isLogin) {
        return <Navigate to="/" />
    }


    return (
        <div className="container">
            <NavLink to="/"><button >back</button></NavLink>
            <h1 className="page-titel">Login Page</h1>
            <LoginForm onSubmit={handelLogin} />
        </div>
    )
}

export default LoginPage;