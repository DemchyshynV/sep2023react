import {configureStore} from "@reduxjs/toolkit";

import {charactersReducer, episodesReducer} from "./slices";

const store = configureStore({
    reducer: {
        episodes: episodesReducer,
        characters: charactersReducer
    }
})

export {
    store
}