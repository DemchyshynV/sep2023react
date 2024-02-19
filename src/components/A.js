import {B} from "./B";
import {useAppContext} from "../hooks/useAppContext";

const A = () => {
    const value = useAppContext()
    return (
        <div>
            <h1>A: {value}</h1>
            <B/>
        </div>
    );
};

export {A};