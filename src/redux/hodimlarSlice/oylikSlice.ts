import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Oylik } from "../../data/Data";

// Assuming `Data` is your initial dataset.

// Initial state
const initialState = {
  items: Oylik, // Store the data in Redux state
};

// Create a slice
const oylikSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // Action to delete multiple items by their IDs
    deleteSelected: (state, action: PayloadAction<number[]>) => {
      state.items = state.items.filter(
        (item) => !action.payload.includes(item.id)
      );
    },
  },
});

// Export actions
export const { deleteSelected } = oylikSlice.actions;

// Export reducer
export default oylikSlice.reducer;
