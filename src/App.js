import {Users} from "./components/Users";
import {useState} from "react";
import {UsersFc} from "./components/UsersFC";

const App = () => {
    const [flag, setFlag] = useState(true);
    return (
        <div>
            {/*{flag && <Users/>}*/}
            {flag && <UsersFc/>}
            <button onClick={() => setFlag(prevState => !prevState)}>Hide/Show</button>
        </div>
    );
};

export {App};