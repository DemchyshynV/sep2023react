import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "../hooks";
import {authActions} from "../redux/slices/authSlice";
import {useNavigate} from "react-router-dom";
import {Button, TextField} from "@mui/material";

const Register = () => {
    const {register, handleSubmit} = useForm<IAuth>();
    const dispatch = useAppDispatch();
    const {registerError} = useAppSelector(state => state.auth);
    const navigate = useNavigate();

    const reg: SubmitHandler<IAuth> = async (user) => {
        const {meta:{requestStatus}} = await dispatch(authActions.register({user}));

        if (requestStatus==='fulfilled'){
            navigate('/login')
        }
    };

    return (
        <div>
            {registerError && <h5>{registerError}</h5>}
            <form onSubmit={handleSubmit(reg)} style={{margin:'10px 0', display:'flex', alignItems:'center'}}>
                <TextField label="Username" variant="outlined" {...register('username')}/>
                <TextField  label="Password" variant="outlined" {...register('password')} />
                <Button variant={'contained'}>register</Button>
            </form>
        </div>
    );
};

export {Register};