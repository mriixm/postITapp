import { createSlice } from "@reduxjs/toolkit";
import { UserData }  from "../Exampledata";
const initialState ={value :UserData}
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers:{
    addUser: (state, action) =>
      {
      state.value.push(action.payload);
    }
  },
});



export const {addUser}=userSlice.actions;
export default userSlice.reducer;