import { createAsyncThunk } from "@reduxjs/toolkit";
import {  getUserProfile, logIn, logOut } from "api/auth";

export const loginProfileThunk = createAsyncThunk('auth/profile', () => getUserProfile())

export const loginThunk = createAsyncThunk('auth/login', async (body, { rejectWithValue, dispatch }) => {
    try {
        const data = await logIn(body)
        dispatch(loginProfileThunk())
        return data
    } catch(error) {
        return rejectWithValue(error.response.data.message)
    }})
    
export const logoutThunk = createAsyncThunk("auth/logout", async () => {
    await logOut();
    // Додайте будь-яку логіку, що вам потрібна після виконання логауту
});
    
