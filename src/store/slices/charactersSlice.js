import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    prevPage: null,
    nextPage: null
};

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {
        setResponse: (state, action) => {
            const {info: {prev, next}, results} = action.payload;
            state.characters = results
            state.prevPage = prev
            state.nextPage = next
        }
    }
})

const {reducer: charactersReducer, actions} = charactersSlice;

const charactersActions = {
    ...actions
}

export {
    charactersReducer,
    charactersActions
}