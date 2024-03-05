import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "./Car";
import {carService} from "../../services";
import {carActions} from "../../store";

const Cars = () => {
    const {cars, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();


    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carActions.setAllCars(data)))
    }, [trigger, dispatch])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};