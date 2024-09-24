// store.ts
import { configureStore } from '@reduxjs/toolkit';
// import dataReducer from "./";
import oylikSlice from './hodimlarSlice/oylikSlice';
import ishbaySlice from './hodimlarSlice/ishbaySlice';
import kunlikSlice from './hodimlarSlice/kunlikSlice';
const store = configureStore({
	reducer: {
		oylik: oylikSlice,
		ishbay: ishbaySlice,
		kunlik: kunlikSlice,
	},
});

export default store;
