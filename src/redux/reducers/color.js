import { CHANGE_COLOR } from '../constants/color';

const initialState = {
	hex: '#4169e1',
};

export default function colorChangeReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_COLOR:
			return { ...state, hex: action.payload };

		default:
			return state;
	}
}
