import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cartValues : [],
    totalPrice : 0
}

const CartReducer = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        incrementCart : (state, action) => {
            state.cartValues.push(action.payload);
            const priceArray = state.cartValues.map(obj => obj.productPrice);
            state.totalPrice = priceArray.reduce((a, b) => a+b, 0);
        },
        decrementCart : (state, action) => {
            const index = state.cartValues.findIndex(obj => obj.productName === action.payload.productName);
            if(index > -1) {
                state.cartValues.splice(index, 1);
            }
            const priceArray = state.cartValues.map(obj => obj.productPrice);
            state.totalPrice = priceArray.reduce((a, b) => a+b, 0);
        }
    }
})
export default CartReducer.reducer;
export const { incrementCart, decrementCart } = CartReducer.actions;