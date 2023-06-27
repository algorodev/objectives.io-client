import { vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import HomeHeader from '../HomeHeader'

describe('Home Header component', () => {
	it('should render component as expected', () => {
		render(<HomeHeader />)
		expect(screen.getByRole('button')).toBeInTheDocument()
	})

	it('should render component as expected', () => {
		const logSpy = vi.spyOn(global.console, 'log')

		render(<HomeHeader />)
		fireEvent.click(screen.getByRole('button'))

		expect(logSpy).toHaveBeenCalledTimes(1)
		expect(logSpy).toHaveBeenCalledWith('Nuevo To Do')
	})
})
