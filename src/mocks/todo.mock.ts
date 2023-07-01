import { RootState } from '../+state/reducer'
import { TodoI } from '../types/todo.types'

export const mockState: RootState = {
	todo: {
		todos: [
			{ id: '1', title: 'Todo 1', completed: false },
			{ id: '2', title: 'Todo 2', completed: true },
		],
	},
}

export const mockCreateTodoAction = {
	todo: {
		id: '1',
		title: 'Workout',
		completed: false,
	},
	type: 'CREATE_TODO',
}

export const mockUpdateTodoAction = {
	id: '1',
	type: 'UPDATE_TODO',
}

export const mockDeleteTodoAction = {
	id: '1',
	type: 'DELETE_TODO',
}

export const mockedData: TodoI[] = [
	{
		id: '1',
		title: 'Create new project',
		completed: false,
	},
	{
		id: '2',
		title: 'Working call',
		completed: false,
	},
	{
		id: '3',
		title: 'Walk with dog',
		completed: true,
	},
	{
		id: '4',
		title: 'Meet with doctor',
		completed: false,
	},
]

export const mockedUpdatedData: TodoI[] = [
	{
		id: '1',
		title: 'Create new project',
		completed: true,
	},
	{
		id: '2',
		title: 'Working call',
		completed: false,
	},
	{
		id: '3',
		title: 'Walk with dog',
		completed: true,
	},
	{
		id: '4',
		title: 'Meet with doctor',
		completed: false,
	},
]
