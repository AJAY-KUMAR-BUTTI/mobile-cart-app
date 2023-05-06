import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/CartReducer';

const store = configureStore({
    reducer : {
        cartReducer
    }
})

export default store;