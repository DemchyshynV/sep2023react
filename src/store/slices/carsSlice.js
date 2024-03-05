import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    trigger: null,
    carForUpdate: null
};

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setAllCars: (state, action) => {
            state.cars = action.payload
        },
        trigger: state => {
            state.trigger = !state.trigger
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    }
})


const {reducer: carReducer, actions} = carsSlice;

const carActions = {
    ...actions
}

export {
    carReducer,
    carActions
}