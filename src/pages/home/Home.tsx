import Container from '../../components/container/Container'
import Separator from '../../components/separator/Separator'
import TodoList from '../../components/todoList/TodoList'
import HomeHeader from './homeHeader/HomeHeader'

const Home = () => {
	return (
		<Container>
			<HomeHeader />
			<Separator />
			<TodoList />
		</Container>
	)
}

export default Home
