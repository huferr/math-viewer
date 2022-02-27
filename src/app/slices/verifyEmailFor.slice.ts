import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "~app/store";

type pages = "login" | "register" | "change_email" | "recovery_password" | "";

interface InitialState {
  for: pages
}

const initialState: InitialState = {
  for: ""
};

export const verifyEmailForSlice = createSlice({
  name: "verifyEmailFor",
  initialState,
  reducers: {
    verifyEmailFor: (state, action: { payload: pages }) => {
      state.for = action.payload;
    }
  }
});

export const { verifyEmailFor } = verifyEmailForSlice.actions;

export const selectVerifyEmailForState = (state: RootState) => state.verifyEmailFor.for;

export const verifyEmailForReducer = verifyEmailForSlice.reducer;