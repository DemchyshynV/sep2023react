import {useEffect, useState} from "react";
import {userService} from "../services/userService";
import {User} from "./User";

const UsersFc = () => {
    console.log('constructor');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log('componentDidMount');
        userService.getAll().then(({data}) => setUsers(data))
        return ()=>{
            console.log('componentWillUnmount');
        }
    }, [])

    useEffect(() => {
        console.log('componentDidUpdate');
    }, [users]);
    return (
        <div>
            {console.log('render')}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersFc};