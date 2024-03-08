import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services";

const initialState = {
    characters: []
}
const getAll = createAsyncThunk(
    'charactersSlice/getAll',
    async ({ids}, thunkAPI) => {
        try {
            return await characterService.getByIds(ids);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.characters = action.payload
            })
})

const {reducer: charactersReducer, actions} = charactersSlice;

const charactersActions = {
    ...actions,
    getAll
}

export {
    charactersReducer,
    charactersActions
}