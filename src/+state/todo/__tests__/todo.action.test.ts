import { TodoI } from '../../../types/todo.types'
import {
	CreateTodoAction,
	DeleteTodoAction,
	UpdateTodoAction,
} from '../todo.action'
import {
	CreateTodoActionTypes,
	DeleteTodoActionTypes,
	UpdateTodoActionTypes,
} from '../todo.constants'

describe('Todo Actions', () => {
	it('should call CreateTodoAction as expected', () => {
		const todo: TodoI = {
			id: 'test-id',
			title: 'Test Todo',
			completed: false,
		}

		const action = CreateTodoAction(todo)
		expect(action.type).toStrictEqual(CreateTodoActionTypes.CREATE_TODO)
		expect(action.todo).toStrictEqual(todo)
	})

	it('should call UpdateTodoAction as expected', () => {
		const todoId = '2'

		const action = UpdateTodoAction(todoId)
		expect(action.type).toStrictEqual(UpdateTodoActionTypes.UPDATE_TODO)
		expect(action.id).toStrictEqual(todoId)
	})

	it('should call CreateTodoAction as expected', () => {
		const todoId = '2'

		const action = DeleteTodoAction(todoId)
		expect(action.type).toStrictEqual(DeleteTodoActionTypes.DELETE_TODO)
		expect(action.id).toStrictEqual(todoId)
	})
})
