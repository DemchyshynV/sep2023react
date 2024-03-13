import React, {FC, PropsWithChildren, SyntheticEvent, useState} from "react";
import {ICar} from "../../interfaces";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {IState} from "../../types";

interface IProps extends PropsWithChildren {
    car: ICar
    setExpanded:IState<string>,
    expanded:string;
}

const Car: FC<IProps> = ({car,expanded,setExpanded}) => {
    const {id, brand, price, year} = car;


    const handleChange =
        (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : null);
        };

    return (
        <Accordion key={id} expanded={expanded === `${id}`} onChange={handleChange(`${id}`)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography sx={{width: '33%', flexShrink: 0}}>
                    {id} {brand}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <div>id: {id}</div>
                    <div>brand: {brand}</div>
                    <div>price: {price}</div>
                    <div>year: {year}</div>
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export {Car};