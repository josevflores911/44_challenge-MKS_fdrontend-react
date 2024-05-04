import { createSlice } from "@reduxjs/toolkit"
import { Product } from "../interfaces/Product"

interface ProductState{
    values:Product[]
}

const initialState: ProductState = {
    values: []
}

const buySlice = createSlice({
    name: "action",
    initialState,
    reducers: {
        addItem: (state, action) => {
            
             if (!state.values.some((value)=>value.id ==action.payload.id)) {
                state.values.push(action.payload)  
             } 
        },
        removeItem: (state, action) => {
            state.values = state.values.filter((value) => value.id !== action.payload.id); 
        }
    }
})

export const {addItem,removeItem} = buySlice.actions

export default buySlice.reducer