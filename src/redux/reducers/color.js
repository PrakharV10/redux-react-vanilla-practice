import { CHANGE_COLOR } from '../constants/color';

const initialState = {
	hex: '#2563eb',
};

export default function colorChangeReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_COLOR:
			return { ...state, hex: action.payload };

		default:
			return state;
	}
}
