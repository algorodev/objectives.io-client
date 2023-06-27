import Button from '../../../components/button/Button'
import './HomeHeader.css'

const HomeHeader = () => {
	const openNewTodoModal = () => {
		console.log('Nuevo To Do')
	}

	return (
		<section className='home-header'>
			<Button
				id='new-todo-button'
				label='New'
				type='button'
				onButtonClick={openNewTodoModal}
			/>
		</section>
	)
}

export default HomeHeader
