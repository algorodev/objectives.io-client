import RootReducer from '../../reducer'
import {
	CreateTodoActionTypes,
	DeleteTodoActionTypes,
	UpdateTodoActionTypes,
} from '../todo.constants'
import todoReducer from '../todo.reducer'

describe('Todo Reducer', () => {
	const mockState = RootReducer(undefined, {
		type: UpdateTodoActionTypes.UPDATE_TODO,
		id: 'test-id',
	}).todo

	it('should return initial state on default as expected', () => {
		expect(mockState).toStrictEqual({ todos: [] })
	})

	it('should create a todo as expected', () => {
		const payload = {
			todo: {
				id: 'test-id',
				title: 'Test Todo',
				completed: false,
			},
		}

		const modifiedState = todoReducer(mockState, {
			type: CreateTodoActionTypes.CREATE_TODO,
			todo: payload.todo,
		})

		expect(modifiedState.todos).toStrictEqual([payload.todo])
	})

	it('should update a todo as expected', () => {
		const todo = {
			id: 'test-id',
			title: 'Test Todo',
			completed: false,
		}
		const payload = {
			id: 'test-id',
		}

		const createTodoState = todoReducer(mockState, {
			type: CreateTodoActionTypes.CREATE_TODO,
			todo: todo,
		})

		const modifiedState = todoReducer(createTodoState, {
			type: UpdateTodoActionTypes.UPDATE_TODO,
			id: payload.id,
		})

		expect(modifiedState.todos[0].completed).toStrictEqual(true)
	})

	it('should not update a todo cause not todo with id as expected', () => {
		const todo = {
			id: 'test-id',
			title: 'Test Todo',
			completed: false,
		}
		const payload = {
			id: 'test-id2',
		}

		const createTodoState = todoReducer(mockState, {
			type: CreateTodoActionTypes.CREATE_TODO,
			todo: todo,
		})

		const modifiedState = todoReducer(createTodoState, {
			type: UpdateTodoActionTypes.UPDATE_TODO,
			id: payload.id,
		})

		expect(modifiedState.todos[0].completed).toStrictEqual(false)
	})

	it('should delete a todo as expected', () => {
		const todo = {
			id: 'test-id',
			title: 'Test Todo',
			completed: false,
		}
		const payload = {
			id: 'test-id',
		}

		const createTodoState = todoReducer(mockState, {
			type: CreateTodoActionTypes.CREATE_TODO,
			todo: todo,
		})

		const modifiedState = todoReducer(createTodoState, {
			type: DeleteTodoActionTypes.DELETE_TODO,
			id: payload.id,
		})

		expect(modifiedState.todos).toStrictEqual([])
	})
})
