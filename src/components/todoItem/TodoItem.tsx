import { TodoItemProps } from './todoItem.types'
import check from '../../assets/icons/check.svg'
import './TodoItem.css'

const TodoItem = ({ todo, onTodoClick }: TodoItemProps) => (
	<div className='todo-item' onClick={onTodoClick}>
		<p
			className={`todo-item__title ${
				todo.completed ? 'todo-item__title--checked' : ''
			}`}>
			{todo.title}
		</p>
		<div className={'todo-item__check'}>
			{todo.completed && (
				<img className='todo-item__check-icon' src={check} alt='check-icon' />
			)}
		</div>
	</div>
)

export default TodoItem
