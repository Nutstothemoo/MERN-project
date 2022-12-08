import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    mode:"light",
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducer:{
        setMode:(state) =>{
            state.mode = state.mode === "light" ? "dark": "light"
        },
        setLogin: (state,action) => {
            state.user = action.payload.user;
            state.token = action.payload.toekn;
        },
        setLogout:(state, action)=> {
            
        }
    }
})