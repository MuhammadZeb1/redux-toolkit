import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import themeReducer from '../features/theme/themeSlice.jsx'

export const store = configureStore({
    reducer: {
        counter: counterReducer,  // The state slice is called 'counter'
        theme:themeReducer
    }
});
