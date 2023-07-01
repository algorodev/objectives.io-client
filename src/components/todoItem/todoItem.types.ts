import { TodoI } from '../../types/todo.types'

export type TodoItemProps = {
	todo: TodoI
	onCheckClick: () => void
	onDeleteClick: () => void
}
