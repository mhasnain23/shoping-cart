const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    cartItems: [],
}

const cartSLice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        AddToCart(state, action) {
            console.log(state, action);
            state.cartItems.push(action.payload)

        },

        removeFromCart(state, action) {
            let copyCartItems = [...state.cartItems]
            copyCartItems = copyCartItems.filter((item) => item.id !== action.payload)
            state.cartItems = copyCartItems
            return state;
        }
    }
})


export const { AddToCart, removeFromCart } = cartSLice.actions;
export default cartSLice.reducer 