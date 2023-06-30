import { TodoItemProps } from './todoItem.types'
import checkIcon from '../../assets/icons/check.svg'
import deleteIcon from '../../assets/icons/delete.svg'
import './TodoItem.css'

const TodoItem = ({ todo, onCheckClick, onDeleteClick }: TodoItemProps) => (
	<div className='todo-item'>
		<p
			className={`todo-item__title ${
				todo.completed ? 'todo-item__title--checked' : ''
			}`}>
			{todo.title}
		</p>
		<section className='todo-item__actions'>
			{!todo.completed && (
				<div
					className='todo-item__action todo-item__action--check'
					onClick={onCheckClick}>
					<img className='todo-item__icon' src={checkIcon} alt='check-icon' />
				</div>
			)}
			<div
				className='todo-item__action todo-item__action--delete'
				onClick={onDeleteClick}>
				<img className='todo-item__icon' src={deleteIcon} alt='check-icon' />
			</div>
		</section>
	</div>
)

export default TodoItem
