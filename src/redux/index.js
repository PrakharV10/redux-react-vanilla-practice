import { changeColor } from './actions/color';
import configureStore from './store/configureStore';

const store = configureStore();
store.subscribe(printColor);

function printColor() {
	console.log(store.getState().color.hex);
}

store.dispatch(changeColor('#ffffff'));

setTimeout(() => {
	store.dispatch(changeColor('#123456'));
}, 3000);
