import RegisterForm from "modules/RegisterForm/RegisterForm";
import { useDispatch } from "react-redux";
import { signup } from "../../../redux/auth/auth-operation";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const handelSignup = (data) => {
        dispatch(signup(data));
    }

    return (
        <div className="container">
            <h1 className="page-titel">Register Page</h1>
            <RegisterForm onSubmit={handelSignup} />
        </div>
    )
}

export default RegisterPage;