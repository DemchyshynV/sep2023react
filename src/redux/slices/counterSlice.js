import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0
};

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        inc: state => {
            state.count += 1
        },
        dec: state => {
            state.count -= 1
        },
        reset: state => {
            state.count = 0
        }
    }
});

const {reducer: counterReducer, actions} = counterSlice;

const counterActions = {
    ...actions
}

export {
    counterReducer,
    counterActions
}

