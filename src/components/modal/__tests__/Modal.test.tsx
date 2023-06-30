import { render, screen } from '@testing-library/react'
import { Mock, vi } from 'vitest'
import { createPortal } from 'react-dom'
import Modal from '../Modal'

vi.mock('react-dom', () => ({
	createPortal: vi.fn(),
}))

describe('Modal component', () => {
	const onCloseFn = vi.fn()

	beforeEach(() => {
		vi.clearAllMocks()
		;(createPortal as Mock).mockImplementation(() => (
			<h4>Create Portal works!</h4>
		))
		render(
			<Modal
				title='Test Modal'
				onClose={onCloseFn}
				children={<h4>Modal Container works!</h4>}
			/>,
		)
	})

	it('should render backdrop as exected', () => {
		expect(screen.getAllByText('Create Portal works!')[0]).toBeInTheDocument()
	})
})
