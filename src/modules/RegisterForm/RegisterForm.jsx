import useForm from 'shared/hooks/useForm';
import Button from 'shared/components/Button/Button';
import initialState from './initialState';
import style from './register-form.module.css';
import TextField from 'shared/components/TextField/TextField';
import fields from './fields';
const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
    const { name, email, password } = state;
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <TextField value={name} handelChange={handleChange} {...fields.name} />
            <TextField value={email} handelChange={handleChange} {...fields.email} />
            <TextField value={password} handelChange={handleChange} {...fields.password} />
            <Button>Register</Button>
        </form>
    )
}

export default RegisterForm;