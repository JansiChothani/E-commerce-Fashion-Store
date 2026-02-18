import { createSlice } from "@reduxjs/toolkit"

let CartSlice = createSlice({
    name:"cart",
    initialState: [],
    reducers: {
        add(state, action){
            state.push(action.payload)
        },
        remove(state, action){
            let r = state.filter((i)=> i.id !== action.payload)
            return r
        },
    }
})
export let {add, remove} = CartSlice.actions
export default CartSlice.reducer