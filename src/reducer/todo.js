const initialState = {
	todos: []
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [ ...state.todos, payload ]
			};
		case 'REMOVE_TODO':
			return {
				...state,
				todos: [ ...state.todos.filter((todo, index) => index !== payload) ]
			};
		default:
			return state;
	}
}
