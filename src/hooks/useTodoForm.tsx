import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TodoFormI } from '../types/todo.types'
import { CreateTodoSchema } from '../utils/todo.schemas'

const useTodoForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TodoFormI>({
		resolver: yupResolver(CreateTodoSchema),
	})

	const onSubmit = handleSubmit((data: TodoFormI) => {
		console.log(data)
	})

	return {
		register,
		errors,
		onSubmit,
	}
}

export default useTodoForm
