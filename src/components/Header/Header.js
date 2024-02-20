import {NavLink, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

import css from './Header.module.css';
import {authService} from "../../services";

const Header = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)


    const token = authService.getToken();

    useEffect(() => {
        if (token) {
            authService.me().then(({data}) => setUser(data)).catch(() => navigate('/login'))
        } else {
            setUser(null)
        }
    }, [token, navigate])

    const logout = () => {
        authService.deleteToken()
        navigate('/login')
    }

    return (
        <div className={css.Header}>
            <div>
                <h1>Cars</h1>
            </div>
            {
                !user ?
                    (
                        <div>
                            <NavLink to={'login'}>Login</NavLink>
                            <NavLink to={'register'}>Register</NavLink>
                        </div>
                    )
                    :
                    <div>
                        <div>{user.username}</div>
                        <button onClick={logout}>Logout</button>
                    </div>
            }
        </div>
    );
};

export {Header};