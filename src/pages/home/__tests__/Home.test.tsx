import { fireEvent, render, screen } from '@testing-library/react'
import Home from '../Home'
import { vi } from 'vitest'

describe('Home Page', () => {
	const onOpenModalFn = vi.fn()

	beforeEach(() => vi.clearAllMocks())

	it('should render Home page as expected', () => {
		const { container } = render(<Home onOpenModal={onOpenModalFn} />)
		expect(screen.getByRole('button')).toBeInTheDocument()
		expect(container.querySelectorAll('.todo-item').length).toBe(4)
	})

	it('should open modal on button click as expected', () => {
		render(<Home onOpenModal={onOpenModalFn} />)
		fireEvent.click(screen.getByRole('button'))
		expect(onOpenModalFn).toHaveBeenCalledTimes(1)
	})
})
