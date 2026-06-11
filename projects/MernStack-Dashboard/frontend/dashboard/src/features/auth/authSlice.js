import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser, checkAuth } from "./authThunk";


const initialState = {
    isAuthicated: false,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder

        //login 
        .addCase(loginUser.pending, (state)=>{
            state.loading = true;
        })
        .addCase(loginUser.fulfilled, (state)=>{
            state.loading = false;
            state.isAuthicated = true;
        })
        .addCase(loginUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        //register
        .addCase(registerUser.pending, (state)=>{
            state.loading = true;
        })
        .addCase(registerUser.fulfilled, (state)=>{
            state.loading = false;
            state.isAuthicated = true;
        })
        .addCase(registerUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        // check Auth
        .addCase(checkAuth.pending, (state)=>{
            state.loading = true;
        })
        .addCase(checkAuth.fulfilled, (state)=>{
            state.loading = false;
            state.isAuthicated = true;
        })
        .addCase(checkAuth.rejected, (state, action)=>{
            state.loading = false;
            state.isAuthicated = false;
            state.error = action.payload;
        })

        //logout
        .addCase(logoutUser.fulfilled, (state)=>{
            state.isAuthicated = false;
        })


    }
})

export default authSlice.reducer;