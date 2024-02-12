import {Link, NavLink} from "react-router-dom";
import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/users'}>User</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
        </div>
    );
};

export {Header};