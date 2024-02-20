import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {registerValidator} from "../../validators";
import {authService} from "../../services";

const RegisterForm = () => {
    const [error, setError] = useState(null)
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(registerValidator)
    });

    const navigate = useNavigate();

    const save = async (user) => {
        try {
            await authService.register(user)
            navigate('/login')
        } catch (e) {
            setError(true)
        }
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            {error && <div>Username already exists</div>}
            <div>Username: <input type="text" {...register('username')}/></div>
            {errors.username && <div>{errors.username.message}</div>}
            <div>Password: <input type="text" {...register('password')}/></div>
            {errors.password && <div>{errors.password.message}</div>}
            <div>ConfirmPassword: <input type="text" {...register('re_password')}/></div>
            {errors.re_password && <div>{errors.re_password.message}</div>}
            <button disabled={!isValid}>Register</button>
        </form>
    );
};

export {RegisterForm};