import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import hodimSlice from './slices/hodimSlice';
import oylikSlice from './slices/oylikSlice';

const rootReducer = combineReducers({
	auth: authSlice,
	hodim: hodimSlice,
	oylik: oylikSlice,
});

const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
