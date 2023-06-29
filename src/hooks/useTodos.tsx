import { useState } from 'react'
import { TodoI } from '../types/todo.types'

const useTodos = () => {
	const TODO_MOCK_DATA: TodoI[] = [
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

	const [todos, setTodos] = useState<TodoI[]>(TODO_MOCK_DATA)

	const updateTodoStatus = (id: number) =>
		setTodos(
			todos.map((todo: TodoI) =>
				todo.id === id ? { ...todo, completed: true } : todo,
			),
		)

	return {
		data: todos,
		updateTodoStatus,
	}
}

export default useTodos
