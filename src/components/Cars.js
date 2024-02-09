import {Car} from "./Car";

const Cars = ({cars, setCarForUpdate,changeTrigger}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} changeTrigger={changeTrigger}/>)}
        </div>
    );
};

export {Cars};