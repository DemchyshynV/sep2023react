import {configureStore} from "@reduxjs/toolkit";

import {charactersReducer} from "./slices";


const store = configureStore({
    reducer: {
        characters: charactersReducer
    }
});

export {
    store
}