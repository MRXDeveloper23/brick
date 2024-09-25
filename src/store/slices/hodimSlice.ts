import { HodimlarData } from '@/data/Data';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
	id: number;
	name: string;
	date: string;
	phoneNumber: number;
	profile: string;
	amount: string;
	invoice: string;
	category: string;
}

interface HodimState {
	items: Item[];
}

// Initial state
const initialState: HodimState = {
	items: HodimlarData, // Store the data in Redux state
};

// Create a slice
const hodimlarSlice = createSlice({
	name: 'hodim',
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
export const { deleteSelected } = hodimlarSlice.actions;

// Export reducer
export default hodimlarSlice.reducer;
