import { render, screen } from '@testing-library/react'
import Home from '../Home'

describe('Home Page', () => {
	it('should render Home page as expected', () => {
		render(<Home />)
		const h4Element = screen.getByText('Container works!', { selector: 'h4' })

		expect(h4Element).toBeInTheDocument()
	})
})
