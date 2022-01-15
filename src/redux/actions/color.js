import { CHANGE_COLOR } from '../constants/color';

export function changeColor(payload) {
	return {
		type: CHANGE_COLOR,
		payload: payload,
	};
}
