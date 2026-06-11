import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productThunk";

const productSlice=createSlice({
    name:"Products",
    initialState:{
        items:[],
        loading:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts: isPending,(state)=>{
            state.loading=true;

        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.items=action.payload;

        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false;
            state.items=action.error.message;
        })
    }


})