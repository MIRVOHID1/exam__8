

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: JSON.parse(localStorage.getItem("Cart") || "[]")
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            localStorage.setItem("Cart", JSON.stringify(state.cart));
        },
        updateCartItem: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cart.find(item => item.id === id);
            if (item) {
                if (quantity > 0) {
                    item.quantity = quantity;
                } else {
                    state.cart = state.cart.filter(item => item.id !== id);
                }
                localStorage.setItem("Cart", JSON.stringify(state.cart));
            }
        }
    }
});

export const { addToCart, updateCartItem } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
