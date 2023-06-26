import { render, screen } from '@testing-library/react'
import Container from '../Container'

describe('Container component', () => {
	it('should render a subtitle as expected', () => {
		render(
			<Container>
				<h4>Container works!</h4>
			</Container>,
		)
		const h4Element = screen.getByText('Container works!', { selector: 'h4' })

		expect(h4Element).toBeInTheDocument()
	})
})
