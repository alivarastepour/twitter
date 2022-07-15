import {configureStore} from "@reduxjs/toolkit";
import {reducers} from "./slice";

const store = configureStore({
    reducer: reducers
});

export default store;