import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/userMasterAction";

export const users = createSlice({
  name: "users",
  initialState: {
    usersObject: {},
    error: "",
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      Object.assign(state, { loading: true, error: "" });
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      Object.assign(state, {
        loading: false,
        usersObject: payload.data,
        error: "",
      });
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      Object.assign(state, { loading: false, error: action.payload });
    });
  },
}).reducer;
