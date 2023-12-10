import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isSideBarOpen: true,
        isAppLoading: false,
        isDarkMode : false,
    },
    reducers: {
        toggleSideBar: (state) => {
            state.isSideBarOpen = !state.isSideBarOpen
        },
        setAppLoading: (state, action) => {
            state.isAppLoading = action.payload
        },
        toggleTheme : (state)=>{
            state.isDarkMode = !state.isDarkMode
            document.documentElement.classList.toggle('dark')
        }
    }
})


export const { toggleSideBar, setAppLoading, toggleTheme } = appSlice.actions
export default appSlice.reducer

