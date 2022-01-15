import React, { useState } from 'react';
import store from '../redux';
import { changeColor } from '../redux/actions/color';

function App() {
	const [color, setColor] = useState(store.getState().color.hex);

	function toggleColor() {
		color === '#ff0000'
			? store.dispatch(changeColor('#4169e1'))
			: store.dispatch(changeColor('#ff0000'));
	}

	store.subscribe(() => setColor(store.getState().color.hex));

	return (
		<div>
			<button onClick={toggleColor}>
				Change to {color === '#4169e1' ? 'Red' : 'Royal Blue'}
			</button>
		</div>
	);
}

export default App;
