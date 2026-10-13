import { createSlice } from "@reduxjs/toolkit";
import { UserData }  from "../Exampledata";
const initalState = { value : UserData};

export const UserSlice = createSlice(
    {
    name: "users",
    initalState,
    reducers: {
        addUser: (state,action)=>
        {
            state.value.push(action.payload);
        },
        deleteUser: (state,action)=>
        {
            state.value = state.value.filter((user)=> user.email !== action.payload);
        },
        updateuser : (state,action)=>
        {
            state.value.map((user)=>
            {
            if(state.value.email === action.payload.email)
            {
                user.name = action.payload.name;
                user.password = action.payload.password;
            }
        });

    },
},

});
export const {addUser,deleteUser,updateuser } = UserSlice.actions;
export default UserSlice.reducer;