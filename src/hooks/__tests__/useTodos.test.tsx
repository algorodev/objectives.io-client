import { act, renderHook } from '@testing-library/react'
import useTodos from '../useTodos'
import { mockedData, mockedUpdatedData } from './useTodos.mock'

describe('useTodos hook', () => {
	it('should return an array of todos as expected', () => {
		const { result } = renderHook(() => useTodos())

		expect(result.current.data).toHaveLength(4)
	})

	it('should update a todo by id as expected', () => {
		const { result } = renderHook(() => useTodos())

		expect(result.current.data).toStrictEqual(mockedData)
		act(() => {
			result.current.updateTodoStatus(1)
		})
		expect(result.current.data).toStrictEqual(mockedUpdatedData)
	})
})
