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
    openViewerModal: (state) => {
      state.isViewerModalOpen = true;
    },
    closeViewerModal: (state) => {
      state.isViewerModalOpen = false;
    },
    openMathscoreModal: (state) => {
      state.isMathscoreModalOpen = true;
    },
    closeMathscoreModal: (state) => {
      state.isMathscoreModalOpen = false;
    }
  }
});

export const { openViewerModal, closeViewerModal, openMathscoreModal, closeMathscoreModal } = infoModalSlice.actions;

export const selectViewerModalState = (state: RootState) => state.infoModal.isViewerModalOpen;
export const selectMathscoreModalState = (state: RootState) => state.infoModal.isMathscoreModalOpen;

export const viewerInfoModalReducer = infoModalSlice.reducer;