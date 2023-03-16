
import { useDispatch } from "react-redux";
import { login } from "../../../redux/auth/auth-operation";

import LoginForm from "modules/LoginForm/LoginForm";

const LoginPage = () => {

    const dispatch = useDispatch();
    const handelLogin = (data) => {
        dispatch(login(data));
    }



    return (
        <div className="container">
            <h1 className="page-titel">Login Page</h1>
            <LoginForm onSubmit={handelLogin} />
        </div>
    )
}

export default LoginPage;