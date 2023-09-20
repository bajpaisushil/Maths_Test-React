import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "./detailSlice";
import questionTimesSlice from "./questionTimesSlice";


const store=configureStore({
    reducer: {
        details: detailReducer,
        timesOfQuestions: questionTimesSlice,
    }
})

export default store;
