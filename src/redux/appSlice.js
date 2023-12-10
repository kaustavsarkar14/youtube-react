import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isSideBarOpen: true,
    },
    reducers: {
        toggleSideBar: (state) => {
            state.isSideBarOpen = !state.isSideBarOpen
        },
       
    }
})


export const { toggleSideBar } = appSlice.actions
export default appSlice.reducer

