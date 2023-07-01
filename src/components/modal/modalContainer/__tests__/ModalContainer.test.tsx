import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import ModalContainer from '../ModalContainer'

describe('Modal Container component', () => {
	const onCloseFn = vi.fn()

	beforeEach(() => {
		vi.clearAllMocks()
		render(
			<ModalContainer
				onClose={onCloseFn}
				children={<h4>Modal Container works!</h4>}
			/>,
		)
	})

	it('should render children as expected', () => {
		expect(screen.getByText('Modal Container works!'))
	})
	it('should close modal on close button click as expected', () => {
		fireEvent.click(screen.getByAltText('close-icon'))
		expect(onCloseFn).toHaveBeenCalledTimes(1)
	})
})
