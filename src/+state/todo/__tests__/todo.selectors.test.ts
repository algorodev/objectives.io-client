import RootReducer from '../../reducer'
import { getTodos } from '../todo.selectors'

describe('Todo Selectors', () => {
	const mockState = RootReducer(undefined, { type: '', payload: '' })

	it('should return an arrays of todos as expected', () => {
		expect(getTodos(mockState)).toBe(mockState.todo.todos)
	})
})
