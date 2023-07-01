import { act, renderHook } from '@testing-library/react'
import { Mock, vi } from 'vitest'
import useTodoForm from '../useTodoForm'
import { useDispatch } from 'react-redux'
import { mockCreateTodoAction } from '../../mocks/todo.mock'
import { useForm } from 'react-hook-form'

vi.mock('react-hook-form', () => ({
	useForm: vi.fn(),
}))

vi.mock('react-redux', () => ({
	useDispatch: vi.fn(() => {}),
}))

describe('useTodoForm hook', () => {
	const dispatch = vi.fn()

	beforeEach(() => vi.clearAllMocks())

	it('should render hook as expected', () => {
		;(useForm as Mock).mockImplementation(() => ({
			handleSumbit: vi.fn(),
			formState: { errors: vi.fn() },
			setFocus: vi.fn(),
			reset: vi.fn(),
			onSubmit: vi.fn(),
			register: vi.fn()
		}))
		const { result } = renderHook(() => useTodoForm())
		expect(result.current.errors).toBeDefined()
		expect(result.current.onSubmit).toBeDefined()
		expect(result.current.register).toBeDefined()
	})

	it('should dispatch create todo action on call onSubmit as expected', () => {
		;(useDispatch as Mock).mockReturnValue(dispatch)
		;(useForm as Mock).mockImplementation(() => ({
			handleSumbit: vi.fn(),
			formState: { errors: vi.fn() },
			setFocus: vi.fn(),
			reset: vi.fn(),
			onSubmit: vi.fn(),
			register: vi.fn()
		}))
		const data = {}
		const { result } = renderHook(() => useTodoForm())

		act(async () => {
			await result.current.onSubmit(data)
		})

		expect(dispatch).toHaveBeenCalledTimes(1)
	})
})
