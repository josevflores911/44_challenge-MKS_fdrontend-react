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
            
             if (!state.values.some((value)=>value.id ===action.payload.id)) {
                state.values.push(action.payload)  
             } 
        },
        removeItem: (state, action) => {
            state.values = state.values.filter((value) => value.id !== action.payload.id); 
        },
        addOneItem: (state, action) => {
            state.values =state.values.map((el) =>
                el.id === action.payload.id ? { ...el, quantity: el.quantity + 1 } : el
              );
        },
        removeOneItem:(state, action) => {
            state.values =state.values.map((el) =>
                el.id === action.payload.id && el.quantity > 1 ? { ...el, quantity: el.quantity - 1 } : el
              );
        }
    }
})

export const {addItem,removeItem,addOneItem,removeOneItem} = buySlice.actions

export default buySlice.reducer