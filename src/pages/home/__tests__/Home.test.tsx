import { fireEvent, render, screen } from '@testing-library/react'
import Home from '../Home'
import { Mock, vi } from 'vitest'
import { useSelector } from 'react-redux'
import { mockedData } from '../../../mocks/todo.mock'

vi.mock('react-redux', () => ({
	useSelector: vi.fn(),
	useDispatch: vi.fn(),
}))

describe('Home Page', () => {
	const onOpenModalFn = vi.fn()

	beforeEach(() => vi.clearAllMocks())

	it('should render Home page as expected', () => {
		;(useSelector as Mock).mockReturnValue(mockedData)
		const { container } = render(<Home onOpenModal={onOpenModalFn} />)
		expect(screen.getByRole('button')).toBeInTheDocument()
		expect(container.querySelectorAll('.todo-item').length).toBe(4)
	})

	it('should open modal on button click as expected', () => {
		;(useSelector as Mock).mockReturnValue(mockedData)
		render(<Home onOpenModal={onOpenModalFn} />)
		fireEvent.click(screen.getByRole('button'))
		expect(onOpenModalFn).toHaveBeenCalledTimes(1)
	})
})
