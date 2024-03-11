import {createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

interface IState {
    isLoading: boolean
}

const initialState: IState = {
    isLoading: null
};

const loadingSlice = createSlice({
    name: 'loadingSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addMatcher(isFulfilled(), state => {
                state.isLoading = false
            })
            .addMatcher(isPending(), state => {
                state.isLoading = true
            })
            .addMatcher(isRejected(), state => {
                state.isLoading = false
            })
});

const {reducer: loadingReducer} = loadingSlice;

export {
    loadingReducer
}