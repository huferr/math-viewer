import { configureStore } from "@reduxjs/toolkit";
import { viewerInfoModalReducer } from "./slices/InfoModal.slice";
import { verifyEmailForReducer } from "./slices/verifyEmailFor.slice";

export const store = configureStore({
  reducer: {
    infoModal: viewerInfoModalReducer,
    verifyEmailFor: verifyEmailForReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch