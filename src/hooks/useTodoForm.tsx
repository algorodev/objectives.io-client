import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { v4 as uuidv4 } from 'uuid'
import { TodoFormI, TodoI } from '../types/todo.types'
import { CreateTodoSchema } from '../utils/todo.schemas'
import { useDispatch } from 'react-redux'
import { CreateTodoAction } from '../+state/todo/todo.action'
import { useEffect } from 'react'

const useTodoForm = () => {
	const dispatch = useDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setFocus,
	} = useForm<TodoFormI>({
		resolver: yupResolver(CreateTodoSchema),
	})

	useEffect(() => {
		setFocus('title')
	}, [setFocus])

	const onSubmit = (data: TodoFormI) => {
		const todo: TodoI = {
			id: uuidv4(),
			title: data.title,
			completed: false,
		}
		dispatch(CreateTodoAction(todo))
		reset()
	}

	return {
		register,
		errors,
		onSubmit,
		handleSubmit,
	}
}

export default useTodoForm
