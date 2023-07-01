import { vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import HomeHeader from '../HomeHeader'

describe('Home Header component', () => {
	it('should render component as expected', () => {
		const onOpenModalFn = vi.fn()
		render(<HomeHeader onOpenModal={onOpenModalFn} />)
		expect(screen.getByRole('button')).toBeInTheDocument()
	})

	it('should render component as expected', () => {
		const onOpenModalFn = vi.fn()

		render(<HomeHeader onOpenModal={onOpenModalFn} />)
		fireEvent.click(screen.getByRole('button'))

		expect(onOpenModalFn).toHaveBeenCalledTimes(1)
	})
})
