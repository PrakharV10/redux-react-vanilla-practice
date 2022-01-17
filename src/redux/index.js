import initSubscriber from 'redux-subscriber';
import { store } from './store/store';

const subscribe = initSubscriber(store);
