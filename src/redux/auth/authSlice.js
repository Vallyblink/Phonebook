import { createSlice } from "@reduxjs/toolkit";
import { loginProfileThunk, loginThunk, logoutThunk } from "./thunks";

const initialState = {
    token: "",
    isLoading: false,
    error: "",
    profile: '',
};

const handleFulfilled = (state, { payload }) => {
    state.isLoading = false;
    state.token = payload.token;
};

const handleFulfilledProfile = (state, { payload }) => {
    state.isLoading = false;
    state.profile = payload;
};

const handleReject = (state, { error, payload }) => {
    state.isLoading = false;
    state.error = payload ?? error.message;
    console.log(state.error);
};

const handlePending = (state) => {
    state.isLoading = true;
};

const handleLogout = (state) => {
    state.token = "";
    state.profile = '';
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.fulfilled, handleFulfilled)
            .addCase(loginProfileThunk.fulfilled, handleFulfilledProfile)
            .addCase(logoutThunk.fulfilled, handleLogout)
            .addMatcher((action) => action.type.endsWith("/rejected"), handleReject)
            .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
             
    },
});

export const authReducer = authSlice.reducer;