import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import oylikSlice from './hodimlarSlice/oylikSlice';
import ishbaySlice from './hodimlarSlice/ishbaySlice';
import kunlikSlice from './hodimlarSlice/kunlikSlice';

const rootReducer = combineReducers({
	auth: authSlice,
	oylik: oylikSlice,
	ishbay: ishbaySlice,
	kunlik: kunlikSlice,
});

const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
