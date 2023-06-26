import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
	it('should mount App component as expected', async () => {
		render(<App />)
		const h4Element = screen.getByText('Container works!', {
			selector: 'h4',
		})

		expect(h4Element).toBeInTheDocument()
	})
})
