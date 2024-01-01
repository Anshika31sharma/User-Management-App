import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

const initialState = {
  usersById: UsersData.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {}),
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { id, name, username } = action.payload;
      state.usersById[id] = { id, name, username };
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      delete state.usersById[id];
    },
    updateUsername: (state, action) => {
      const { id, username } = action.payload;
      state.usersById[id].username = username;
    },
  },
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;
