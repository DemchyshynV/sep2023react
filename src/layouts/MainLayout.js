import {Outlet, useNavigate} from "react-router-dom";

const MainLayout = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate(-1)}>prev</button>
            <button onClick={() => navigate(1)}>next</button>
            <Outlet/>
        </div>
    );
};

export {MainLayout};