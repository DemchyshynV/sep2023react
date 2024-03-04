import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0
};
const counter2Slice = createSlice({
    name: 'counter2Slice',
    initialState,
    reducers: {
        inc: state => {
            state.count += 1
        },
        dec: state => {
            state.count -= 1
        },
        reset: (state, action) => {
            state.count = action.payload
        },
    }
})


const {reducer: counter2Reducer, actions} = counter2Slice;

const counter2Actions = {
    ...actions
}

export {
    counter2Reducer,
    counter2Actions
}