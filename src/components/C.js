import {useAppContext} from "../hooks/useAppContext";

const C = () => {
    const value = useAppContext()
    return (
        <div>
            <h1>C: {value}</h1>
        </div>
    );
};

export {C};