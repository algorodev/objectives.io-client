import { TodoI } from '../../types/todo.types'

export type TodoItemProps = {
	todo: TodoI
	onTodoClick: () => void
}
