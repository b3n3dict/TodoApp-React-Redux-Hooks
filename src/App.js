import React from 'react';
import TodoApp from './components/todoApp/TodoApp';
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<div>
				<TodoApp />
			</div>
		</Provider>
	);
}

export default App;
