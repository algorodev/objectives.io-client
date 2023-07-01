import { fireEvent, render, screen } from '@testing-library/react'
import TodoList from '../TodoList'
import { Mock, vi } from 'vitest'
import { useDispatch, useSelector } from 'react-redux'
import {
	mockDeleteTodoAction,
	mockUpdateTodoAction,
	mockedData,
} from '../../../mocks/todo.mock'

vi.mock('react-redux', () => ({
	useSelector: vi.fn(),
	useDispatch: vi.fn(),
}))

describe('Todo List component', () => {
	const dispatch = vi.fn()

	beforeEach(() => vi.clearAllMocks())

	it('should render component as expected', () => {
		;(useSelector as Mock).mockReturnValue(mockedData)
		const { container } = render(<TodoList />)
		expect(container.querySelectorAll('.todo-item').length).toBe(4)
	})

	it('should call function on check icon click as expected', () => {
		;(useDispatch as Mock).mockReturnValue(dispatch)
		;(useSelector as Mock).mockReturnValue(mockedData)
		render(<TodoList />)
		fireEvent.click(screen.getAllByAltText('check-icon')[0])

		expect(dispatch).toHaveBeenCalledTimes(1)
		expect(dispatch).toHaveBeenCalledWith(mockUpdateTodoAction)
	})

	it('should call function on delete icon click as expected', () => {
		;(useDispatch as Mock).mockReturnValue(dispatch)
		;(useSelector as Mock).mockReturnValue(mockedData)
		render(<TodoList />)
		fireEvent.click(screen.getAllByAltText('delete-icon')[0])

		expect(dispatch).toHaveBeenCalledTimes(1)
		expect(dispatch).toHaveBeenCalledWith(mockDeleteTodoAction)
	})
})
