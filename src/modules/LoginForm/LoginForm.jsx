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
            <TextField value={email} handelChange={handleChange} {...fields.email} className={style.input} />
            <TextField value={password} handelChange={handleChange} {...fields.password} className={style.input} />
            <Button className={style.button}>Login</Button>
        </form>
    )
}

export default LoginForm;