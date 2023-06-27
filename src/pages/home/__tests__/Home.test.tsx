import { render, screen } from '@testing-library/react'
import Home from '../Home'

describe('Home Page', () => {
	it('should render Home page as expected', () => {
		render(<Home />)
		expect(screen.getByRole('button')).toBeInTheDocument()
	})
})
