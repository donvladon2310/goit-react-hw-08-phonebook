/* eslint-disable react/no-typos */
import PropTypes from 'prop-types';
import style from "./filter.module.css";

const Filter = ({ handelChange, value }) => {
    return (
        <div >
            <h4 className={style.title}>Contacts</h4>
            <div className={style.filter}>
                <h5 className={style.filterName}>Find contacts by name</h5>
                <input value={value} name='filter' onChange={handelChange} />
            </div>

        </div>
    )
}

export default Filter;



Filter.propTypes = {
    handelChange: PropTypes.func.isRequired,
}