import {C} from "./C";
import {useAppContext} from "../hooks/useAppContext";

const B = () => {
    const  value= useAppContext()
    return (
        <div>
            <h1>B:{value}</h1>
            <C/>
        </div>
    );
};

export {B};