import React from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../redux/features/color/color-slice';
import Button from './component/Button';

function App() {
	const dispatch = useDispatch();

	function toggleColor() {
		colorHexValue === '#ff0000'
			? dispatch(changeColor('#4169e1'))
			: dispatch(changeColor('#ff0000'));
	}

	return (
		<div>
			<Button />
		</div>
	);
}

export default App;
