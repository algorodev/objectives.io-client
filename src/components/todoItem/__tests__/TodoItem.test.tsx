import { vi } from 'vitest'
import TodoItem from '../TodoItem'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Todo Item component', () => {
	const onCheckClickFn = vi.fn()
	const onDeleteClickFn = vi.fn()

	beforeEach(() => {
		vi.clearAllMocks()
		render(
			<TodoItem
				todo={{ id: '1', title: 'Workout!', completed: false }}
				onCheckClick={onCheckClickFn}
				onDeleteClick={onDeleteClickFn}
			/>,
		)
	})

	it('should render component as expected', () => {
		expect(screen.getByText('Workout!')).toBeInTheDocument()
	})
	it('should call onCheckClick function on todo item component click as expected', () => {
		fireEvent.click(screen.getByAltText('check-icon')!)
		expect(onCheckClickFn).toHaveBeenCalledTimes(1)
	})
	it('should call onDeleteClick function on todo item component click as expected', () => {
		fireEvent.click(screen.getByAltText('delete-icon')!)
		expect(onDeleteClickFn).toHaveBeenCalledTimes(1)
	})
})
