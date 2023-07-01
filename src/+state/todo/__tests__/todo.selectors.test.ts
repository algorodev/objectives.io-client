import RootReducer from '../../reducer'
import { UpdateTodoActionTypes } from '../todo.constants'
import { getTodos } from '../todo.selectors'

describe('Todo Selectors', () => {
	const mockState = RootReducer(undefined, {
		type: UpdateTodoActionTypes.UPDATE_TODO,
		id: 'test-id',
	})

	it('should return an arrays of todos as expected', () => {
		expect(getTodos(mockState)).toBe(mockState.todo.todos)
	})
})
