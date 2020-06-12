import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

	return (
		<div>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>
						{todo}{' '}
						<i
							className='fas fa-trash-alt'
							onClick={() => dispatch({ type: 'REMOVE_TODO', payload: index })}
						/>{' '}
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
