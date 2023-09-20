import { createSlice } from "@reduxjs/toolkit";

const questionTimesSlice=createSlice({
    name: "questionTimes",
    initialState: [],
    reducers: {
        setTimesOfQuestions(state, action){
            console.log('action.payload', action.payload);
            return action.payload;
        }
    }
})

export const {setTimesOfQuestions}=questionTimesSlice.actions;
export default questionTimesSlice.reducer;
