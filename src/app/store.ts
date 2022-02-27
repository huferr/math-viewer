import { configureStore } from "@reduxjs/toolkit";
import { viewerInfoModalReducer, verifyEmailForReducer } from "./slices";

export const store = configureStore({
  reducer: {
    infoModal: viewerInfoModalReducer,
    verifyEmailFor: verifyEmailForReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch