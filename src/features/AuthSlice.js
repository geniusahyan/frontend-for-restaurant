import { createSlice, nanoid } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        islogin : false,
    },
    reducers: {
        login: (state) => {
            state.islogin = true;
        },
        logout: (state) => {
            state.islogin = false;
        },
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;