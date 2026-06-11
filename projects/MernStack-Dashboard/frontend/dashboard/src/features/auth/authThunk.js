import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

export const loginUser = createAsyncThunk(
    "auth/login", async (data, thunkAPI)=>{
        try{
            const res = await axios.post("/auth/login", data);
            return res.data;
        }catch(err){
            return thunkAPI.rejectWithValue(err.response.data.message);
        }
    }
);

export const registerUser = createAsyncThunk(
    "auth/register", async (userData, thunkAPI) => {
        try{
            const res = await axios.post("/auth/register", userData);
            return res.data;
        }catch(err){
            return thunkAPI.rejectWithValue("Register Failed");
        }
    }
);

export const checkAuth = createAsyncThunk(
    "auth/check", async (_, thunkAPI)=>{
        try{
            const res = await axios.get("/auth/dashboard");
            return res.data;
        }catch(err){
            return thunkAPI.rejectWithValue("Unauthorized");
        }
    }
);

export const logoutUser = createAsyncThunk(
    "auth/logout", async () => {
        await axios.post("/auth/logout");
    }
);