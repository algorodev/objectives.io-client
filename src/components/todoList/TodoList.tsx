import useTodos from '../../hooks/useTodos'
import { TodoI } from '../../types/todo.types'
import TodoItem from '../todoItem/TodoItem'
import './TodoList.css'

const TodoList = () => {
	const { data, deleteTodo, updateTodoStatus } = useTodos()

	return (
		<section className='todo-list'>
			{data.map((todo: TodoI) => (
				<TodoItem
					key={`todo-${todo.id}`}
					todo={todo}
					onCheckClick={() => updateTodoStatus(todo.id)}
					onDeleteClick={() => deleteTodo(todo.id)}
				/>
			))}
		</section>
	)
}

export default TodoList
