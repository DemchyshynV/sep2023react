import {useState} from "react";
import {ComponentOne} from "./components/ComponentOne";
import {ComponentTwo} from "./components/ComponentTwo";
import {useSelector} from "react-redux";

const App = () => {
    const {count} = useSelector(state => state.counter1);
    const {count: count2} = useSelector(state => state.counter2);
    return (
        <div>
            <div>
                count: {count}
            </div>
            <div>
                count2: {count2}
            </div>
            <ComponentOne/>
            <ComponentTwo/>
        </div>
    );
};

export {App};