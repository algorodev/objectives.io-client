import { vi } from 'vitest'
import TodoItem from '../TodoItem'
import { RenderResult, fireEvent, render, screen } from '@testing-library/react'

describe('Todo Item component', () => {
	const onTodoClickFn = vi.fn()
	let element: RenderResult

	beforeEach(() => {
		vi.clearAllMocks()
		element = render(
			<TodoItem
				todo={{ id: 1, title: 'Workout!', completed: false }}
				onTodoClick={onTodoClickFn}
			/>,
		)
	})

	it('should render component as expected', () => {
		expect(screen.getByText('Workout!')).toBeInTheDocument()
	})
	it('should call onTodoClick function on todo item component click as expected', () => {
		const { container } = element
		fireEvent.click(container.querySelector('.todo-item')!)
		expect(onTodoClickFn).toHaveBeenCalledTimes(1)
	})
})
