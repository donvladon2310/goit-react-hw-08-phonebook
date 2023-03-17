import style from './text-field.module.css';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';


const TextField = ({ label, handelChange, ...props }) => {
    const id = useMemo(() => nanoid(), []);
    return (
        <div className={style.wrapper}>
            <label className={style.label} htmlFor={id}>{label}</label>
            <input className={style.field} id={id} onChange={handelChange} {...props} />
        </div>
    )
}

export default TextField;