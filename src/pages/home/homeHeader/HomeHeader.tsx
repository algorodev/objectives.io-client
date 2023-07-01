import Button from '../../../components/button/Button'
import { HomeProps } from '../home.types'
import './HomeHeader.css'

const HomeHeader = ({ onOpenModal }: HomeProps) => (
	<section className='home-header'>
		<Button
			id='new-todo-button'
			label='New'
			type='button'
			onButtonClick={onOpenModal}
		/>
	</section>
)

export default HomeHeader
