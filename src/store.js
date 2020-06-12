import { createStore } from 'redux';
import todo from './reducer/todo';

const store = createStore(todo);

export default store;
