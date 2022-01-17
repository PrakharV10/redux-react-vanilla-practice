import { configureStore } from '@reduxjs/toolkit';
import { colorReducer } from '../features';

export const store = configureStore({
	reducer: {
		color: colorReducer,
	},
});

console.log(store);
