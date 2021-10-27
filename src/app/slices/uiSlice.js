import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: "dark",
        menuOpen: false,
    },
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
        menuToggle(state) {
            state.menuOpen = !state.menuOpen;
        },
        menuClose(state) {
            state.menuOpen = false;
        },
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
