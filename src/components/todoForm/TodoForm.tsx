import useTodoForm from '../../hooks/useTodoForm'
import Button from '../button/Button'
import './TodoForm.css'

const TodoForm = () => {
	const { register, errors, onSubmit } = useTodoForm()

	return (
		<form className='todo-form'>
			<div className='input-control'>
				<label className='input-control__label' htmlFor='todo-title-input'>
					Title
				</label>
				<input
					{...register('title')}
					id='todo-title-input'
					name='title'
					type='text'
					className='input'
					required
				/>
				{errors.title && (
					<small className='input-control__error'>{errors.title.message}</small>
				)}
			</div>
			<Button
				id='create-todo-button'
				type='button'
				label='Create'
				onButtonClick={onSubmit}
			/>
		</form>
	)
}

export default TodoForm
