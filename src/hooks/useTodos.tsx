import { useSelector } from 'react-redux'
import { getTodos } from '../+state/todo/todo.selectors'
import { useDispatch } from 'react-redux'
import { DeleteTodoAction, UpdateTodoAction } from '../+state/todo/todo.action'

const useTodos = () => {
	const dispatch = useDispatch()
	const todos = useSelector(getTodos)

	const updateTodoStatus = (id: string) => dispatch(UpdateTodoAction(id))

	const deleteTodo = (id: string) => dispatch(DeleteTodoAction(id))

	return {
		data: todos,
		deleteTodo,
		updateTodoStatus,
	}
}

export default useTodos
