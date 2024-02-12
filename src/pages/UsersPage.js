import {Users} from "../components/UsersContainer/Users";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div style={{display:'flex'}}>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};