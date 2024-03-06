import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    trigger: null,
    carForUpdate: null,
    loading: null,
    error: null
};

const getAll = createAsyncThunk(
    'carsSlice/getAll',
    async (_, thunkAPI) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 3000))
            const {data} = await carService.getAll();
            // return thunkAPI.fulfillWithValue(data)
            return data
        } catch (e) {
            const error = e.response.data;
            console.log(error);
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const create = createAsyncThunk(
    'carsSlice/create',
    async ({car}, thunkAPI) => {
        try {
            const {data} = await carService.create(car);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const updateById = createAsyncThunk(
    'carsSlice/updateById',
    async ({id, carData}, thunkAPI) => {
        try {
            const {data} = await carService.updateById(id, carData);
            // thunkAPI.dispatch(carActions.trigger())
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)

        }
    }
)

const deleteById = createAsyncThunk(
    'carsSlice/deleteById',
    async ({id}, thunkAPI)=>{
        try {
            await carService.deleteByd(id)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        // trigger: state => {
        //     state.trigger = !state.trigger
        // },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            // .addCase(create.fulfilled, state => {
            // })
            // .addCase(updateById.fulfilled, state => {
            //     state.carForUpdate = null
            // })
            // .addCase(getAll.pending, state => {
            //     state.loading = true
            // })
            // .addCase(getAll.rejected, (state, action) => {
            //     state.error = action.payload.detail
            //     state.loading = false
            //
            // })
            .addMatcher(isFulfilled(create, updateById, deleteById),state => {
                state.trigger = !state.trigger
            })
            .addMatcher(isFulfilled(getAll), state => {
                state.loading = false
                state.error = null
            })
            .addMatcher(isPending(getAll), state => {
                state.loading = true
            })
            .addMatcher(isRejected(getAll), (state, action) => {
                state.error = action.payload.detail
                state.loading = false
            })
            // .addDefaultCase((state, action) => {
            //     console.log(action);
            // })
})


const {reducer: carReducer, actions} = carsSlice;

const carActions = {
    ...actions,
    getAll,
    create,
    updateById,
    deleteById
}

export {
    carReducer,
    carActions
}