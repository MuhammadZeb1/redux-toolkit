import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    color:"white",
}

export const themeSlice = createSlice({
    name:"theme",
    initialState:initialState,
    reducers:{
        themeConvert:(state,action)=>{
            state.color = action.payload;
        }
    }
})
export const {themeConvert}=themeSlice.actions;
export default themeSlice.reducer;