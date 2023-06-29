import Home from './pages/home/Home'
import './App.css'
import { useState } from 'react'
import Modal from './components/modal/Modal'

const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<>
			{isModalOpen && (
				<Modal title='Test' onClose={() => setIsModalOpen(false)}>
					<h4>Modal works!</h4>
				</Modal>
			)}
			<main className='app'>
				<Home onOpenModal={() => setIsModalOpen(true)} />
			</main>
		</>
	)
}

export default App
