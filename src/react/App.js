import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeColor } from '../redux/actions/color';

function App() {
	const colorHexValue = useSelector((state) => state.color.hex);
	const dispatch = useDispatch();

	function toggleColor() {
		colorHexValue === '#ff0000'
			? dispatch(changeColor('#4169e1'))
			: dispatch(changeColor('#ff0000'));
	}

	return (
		<div>
			<button onClick={toggleColor}>
				Change to {colorHexValue === '#4169e1' ? 'Red' : 'Royal Blue'}
			</button>
		</div>
	);
}

export default App;
