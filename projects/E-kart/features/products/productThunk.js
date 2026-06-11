import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";


export const fetchProducts=createAsyncThunk("products/fetch",
    async ()=>{
        const response= await api.get("/products?limit=30");
        return.response
    }
)