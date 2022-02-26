import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface InitialState {
    isViewerModalOpen: boolean,
    isMathscoreModalOpen: boolean,
}

const initialState: InitialState = {
  isViewerModalOpen: true,
  isMathscoreModalOpen: true, 
};

export const infoModalSlice = createSlice({
  name: "infoModal",
  initialState,
  reducers: {
    viewerModal: (state, action) => {
      state.isViewerModalOpen = action.payload;
    },
    mathscoreModal: (state, action) => {
      state.isMathscoreModalOpen = action.payload;
    },
  }
});

export const { viewerModal, mathscoreModal } = infoModalSlice.actions;

export const selectModalState = (state: RootState) => state.infoModal;

export const viewerInfoModalReducer = infoModalSlice.reducer;