import React, { useState } from 'react';
import '../../App.css';
import TodoList from '../todoApp/TodoList';
import { useDispatch } from 'react-redux';

const TodoApp = () => {
	const [ value, setValue ] = useState('');
	const dispatch = useDispatch();
	const getValue = (event) => {
		event.preventDefault();
		setValue(event.target.value);
		console.log(value);
	};

	const storeItem = (event) => {
		event.preventDefault();
		if (value === '') return;
		dispatch({ type: 'ADD_TODO', payload: value });
		setValue('');
	};

	return (
		<div className='todo-container'>
			<form className='input-section' onSubmit={storeItem}>
				<h1>TodoApp</h1>
				<input type='text' name='input' placeholder='enter items' value={value} onChange={getValue} />
			</form>
			<TodoList />
		</div>
	);
};

export default TodoApp;
