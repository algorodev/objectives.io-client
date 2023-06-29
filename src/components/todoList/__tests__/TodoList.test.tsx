import { fireEvent, render } from '@testing-library/react'
import TodoList from '../TodoList'

describe('Todo List component', () => {
	it('should render component as expected', () => {
		const { container } = render(<TodoList />)
		expect(container.querySelectorAll('.todo-item').length).toBe(4)
	})

	it('should render component as expected', () => {
		const { container } = render(<TodoList />)

		fireEvent.click(container.querySelector('.todo-item')!)
		expect(
			container.querySelectorAll('.todo-item__title--checked').length,
		).toBe(2)
	})
})
