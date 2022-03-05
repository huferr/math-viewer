import { configureStore } from "@reduxjs/toolkit";
import { viewerInfoModalReducer } from "./slices";

export const store = configureStore({
  reducer: {
    infoModal: viewerInfoModalReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch