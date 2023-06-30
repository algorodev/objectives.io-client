import { TodoI, TodoState } from '../../types/todo.types'
import { TodoActions } from './todo.action'
import {
	CreateTodoActionTypes,
	DeleteTodoActionTypes,
	UpdateTodoActionTypes,
} from './todo.constants'

const initialState: TodoState = {
	todos: [],
}

const todoReducer = (
	state: TodoState = initialState,
	action: TodoActions,
): TodoState => {
	switch (action.type) {
		case CreateTodoActionTypes.CREATE_TODO:
			return {
				...state,
				todos: [...state.todos, action.todo],
			}
		case UpdateTodoActionTypes.UPDATE_TODO:
			return {
				...state,
				todos: state.todos.map((todo: TodoI) =>
					todo.id === action.id ? { ...todo, completed: true } : todo,
				),
			}
		case DeleteTodoActionTypes.DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo: TodoI) => todo.id !== action.id),
			}
		default:
			return state
	}
}

export default todoReducer
