import {Cars} from "../components/CarsContainer/Cars";
import {CarForm} from "../components/CarsContainer/CarForm";

const CarsPage = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};