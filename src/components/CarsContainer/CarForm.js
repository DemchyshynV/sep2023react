import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useAppContext} from "../../hooks/useAppContext";

const CarForm = () => {
    const {register, reset, handleSubmit} = useForm();
    const {changeTrigger} = useAppContext();

    const save = async (car) => {
        await carService.create(car)
        // reset()
        changeTrigger()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>save</button>
        </form>
    );
};

export {CarForm};