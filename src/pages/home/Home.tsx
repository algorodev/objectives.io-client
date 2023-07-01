import Container from '../../components/container/Container'
import Separator from '../../components/separator/Separator'
import TodoList from '../../components/todoList/TodoList'
import { HomeProps } from './home.types'
import HomeHeader from './homeHeader/HomeHeader'

const Home = ({ onOpenModal }: HomeProps) => (
	<Container>
		<HomeHeader onOpenModal={onOpenModal} />
		<Separator />
		<TodoList />
	</Container>
)

export default Home
