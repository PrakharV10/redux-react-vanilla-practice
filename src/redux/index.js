import configureStore from './store/configureStore';
import initSubscriber from "redux-subscriber";

const store = configureStore();

const subscribe = initSubscriber(store);

export default store;
