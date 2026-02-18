// const { configureStore } = require("@reduxjs/toolkit");
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Store/CartSlice.jsx";

let Store = configureStore({
    reducer: {
        cart: CartSlice
    }
})
export default Store