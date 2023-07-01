import { render, screen } from '@testing-library/react'
import { Mock, vi } from 'vitest'
import TodoForm from '../TodoForm'
import useTodoForm from '../../../hooks/useTodoForm'

vi.mock('../../../hooks/useTodoForm', () => ({
	__esModule: true,
	default: vi.fn(),
}))

describe('Todo Form component', () => {
	beforeEach(() => vi.clearAllMocks())

	it('should render form component as expected', () => {
		;(useTodoForm as Mock).mockReturnValue({
			register: vi.fn(),
			errors: vi.fn(),
			onSubmit: vi.fn(),
			handleSubmit: vi.fn(),
		})
		render(<TodoForm />)
		expect(screen.getByText('Title')).toBeInTheDocument()
		expect(screen.getByRole('button')).toBeInTheDocument()
	})
})
