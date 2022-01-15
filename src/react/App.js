import  React, {useState} from 'react';
import configureStore from "../redux/store"
import { changeColor } from "../redux/actions/color"

const store = configureStore();

function App() {
	const [color, setColor] = useState(store.getState().color.hex)

	function toggleColor(){
		color === "#ff0000"
      ? store.dispatch(changeColor("#4169e1"))
      : store.dispatch(changeColor("#ff0000"));
	}

	store.subscribe(() => setColor(store.getState().color.hex));

	return (
    <div>
      <button onClick={toggleColor}>Change to {color === "#4169e1" ? "Red" : "Royal Blue"}</button>
    </div>
  );
}

export default App;
