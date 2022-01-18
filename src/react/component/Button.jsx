import React from 'react';

function Button() {
	const colorHexValue = useSelector((state) => state.color.hex);

	return (
		<button onClick={toggleColor}>
			Change to {colorHexValue === '#4169e1' ? 'Red' : 'Royal Blue'}
		</button>
	);
}

export default Button;
