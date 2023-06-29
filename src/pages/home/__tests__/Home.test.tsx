import { render, screen } from '@testing-library/react'
import Home from '../Home'

describe('Home Page', () => {
	it('should render Home page as expected', () => {
		const { container } = render(<Home />)
		expect(screen.getByRole('button')).toBeInTheDocument()
		expect(container.querySelectorAll('.todo-item').length).toBe(4)
	})
})
