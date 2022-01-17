import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	hex: '#4169e1',
};

const colorSlice = createSlice({
	name: 'color',
	initialState,
	reducers: {
		changeColor(state, action) {
			state.hex = action.payload;
		},
	},
});

export default colorSlice.reducer;
export const { changeColor } = colorSlice.actions;
