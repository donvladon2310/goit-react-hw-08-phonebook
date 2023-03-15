import useForm from 'shared/hooks/useForm';
import Button from 'shared/components/Button/Button';
import initialState from './initialState';
import style from './login-form.module.css';
import TextField from 'shared/components/TextField/TextField';
import fields from './fields';
const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
    const { email, password } = state;
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <TextField value={email} handelChange={handleChange} {...fields.email} />
            <TextField value={password} handelChange={handleChange} {...fields.password} />
            <Button>Login</Button>
        </form>
    )
}

export default LoginForm;