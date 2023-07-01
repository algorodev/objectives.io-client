import Home from './pages/home/Home'
import './App.css'
import { useState } from 'react'
import Modal from './components/modal/Modal'
import TodoForm from './components/todoForm/TodoForm'

const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<>
			{isModalOpen && (
				<Modal onClose={() => setIsModalOpen(false)}>
					<TodoForm />
				</Modal>
			)}
			<main className='app'>
				<Home onOpenModal={() => setIsModalOpen(true)} />
			</main>
		</>
	)
}

export default App
