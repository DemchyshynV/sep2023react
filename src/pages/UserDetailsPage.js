import {useLoaderData, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../services/userService";
import {UserDetails} from "../componets/UsersContainer/UserDetails";

const UserDetailsPage = () => {
    const [userDetails, setUserDetails] = useState(null)
    const {id} = useParams();
    const {state} = useLocation();
    const {data} = useLoaderData();

    // useEffect(() => {
    //     // if (state?.user) {
    //     //     setUserDetails(state.user)
    //     // } else {
    //     //     userService.getById(id).then(({data}) => setUserDetails(data))
    //     // }
    // }, [id, state]);

    return (
        <div>
            <UserDetails userDetails={data}/>
        </div>
    );
};

export {UserDetailsPage};