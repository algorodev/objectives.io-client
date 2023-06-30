import { vi } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import Backdrop from '../Backdrop'

describe('Backdrop component', () => {
	const onBackdropClickFn = vi.fn()

	beforeEach(() => vi.clearAllMocks())

	it('should render component as expected', () => {
		const { container } = render(
			<Backdrop onBackdropClick={onBackdropClickFn} />,
		)
		expect(container.querySelector('.backdrop')).toBeInTheDocument()
	})

	it('should close component when click on it', () => {
		const { container } = render(
			<Backdrop onBackdropClick={onBackdropClickFn} />,
		)
		fireEvent.click(container.querySelector('.backdrop')!)
		expect(onBackdropClickFn).toHaveBeenCalledTimes(1)
	})
})
