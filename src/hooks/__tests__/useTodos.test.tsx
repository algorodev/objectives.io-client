import { act, renderHook } from '@testing-library/react'
import useTodos from '../useTodos'
import {
	mockDeleteTodoAction,
	mockUpdateTodoAction,
	mockedData,
} from '../../mocks/todo.mock'
import { Mock, vi } from 'vitest'
import { useSelector, useDispatch } from 'react-redux'

vi.mock('react-redux', () => ({
	useSelector: vi.fn(),
	useDispatch: vi.fn(),
}))

describe('useTodos hook', () => {
	const dispatch = vi.fn()

	beforeEach(() => {
		vi.clearAllMocks()
	})

	it('should return an array of todos as expected', () => {
		;(useSelector as Mock).mockReturnValue(mockedData)
		const { result } = renderHook(() => useTodos())

		expect(result.current.data).toHaveLength(4)
	})

	it('should update a todo by id as expected', () => {
		;(useDispatch as Mock).mockReturnValue(dispatch)
		const { result } = renderHook(() => useTodos())

		act(() => {
			result.current.updateTodoStatus('1')
		})

		expect(dispatch).toHaveBeenCalledTimes(1)
		expect(dispatch).toHaveBeenCalledWith(mockUpdateTodoAction)
	})

	it('should update a todo by id as expected', () => {
		;(useDispatch as Mock).mockReturnValue(dispatch)
		const { result } = renderHook(() => useTodos())

		act(() => {
			result.current.deleteTodo('1')
		})

		expect(dispatch).toHaveBeenCalledTimes(1)
		expect(dispatch).toHaveBeenCalledWith(mockDeleteTodoAction)
	})
})
