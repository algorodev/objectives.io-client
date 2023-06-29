import { TodoI } from '../../types/todo.types'

export const mockedData: TodoI[] = [
	{
		id: 1,
		title: 'Create new project',
		completed: false,
	},
	{
		id: 2,
		title: 'Working call',
		completed: false,
	},
	{
		id: 3,
		title: 'Walk with dog',
		completed: true,
	},
	{
		id: 4,
		title: 'Meet with doctor',
		completed: false,
	},
]

export const mockedUpdatedData: TodoI[] = [
	{
		id: 1,
		title: 'Create new project',
		completed: true,
	},
	{
		id: 2,
		title: 'Working call',
		completed: false,
	},
	{
		id: 3,
		title: 'Walk with dog',
		completed: true,
	},
	{
		id: 4,
		title: 'Meet with doctor',
		completed: false,
	},
]
