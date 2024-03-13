import {useAppDispatch, useAppSelector} from "../../hooks";
import React, {SyntheticEvent, useEffect, useState} from "react";
import {carActions} from "../../redux/slices/carSlice";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Car} from "./Car";

const Cars = () => {
    const {cars} = useAppSelector(state => state.cars);
    const [expanded, setExpanded] = useState<string>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [])


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setExpanded={setExpanded} expanded={expanded}/>)}
        </div>
    );
};

export {Cars};