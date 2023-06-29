import useTodos from '../../hooks/useTodos'
import { TodoI } from '../../types/todo.types'
import TodoItem from '../todoItem/TodoItem'
import './TodoList.css'

const TodoList = () => {
	const { data, updateTodoStatus } = useTodos()

	return (
		<section className='todo-list'>
			{data.map((todo: TodoI) => (
				<TodoItem
					key={`todo-${todo.id}`}
					todo={todo}
					onTodoClick={() => updateTodoStatus(todo.id)}
				/>
			))}
		</section>
	)
}

export default TodoList
