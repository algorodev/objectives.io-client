import { vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from '../Button'

describe('Button component', () => {
	it('should render button as expected', () => {
		render(
			<Button
				id='test-id'
				label='Test'
				type='button'
				onButtonClick={() => console.log('Click!')}
			/>,
		)
		expect(screen.getByRole('button')).toBeInTheDocument()
	})

	it('should work as expected when click button', () => {
		const handleClick = vi.fn()
		render(
			<Button
				id='test-id'
				label='Test'
				type='button'
				onButtonClick={handleClick}
			/>,
		)

		fireEvent.click(screen.getByRole('button'))
		expect(handleClick).toHaveBeenCalledTimes(1)
	})
})
