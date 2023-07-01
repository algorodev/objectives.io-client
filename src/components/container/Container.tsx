import { ContainerProps } from './container.types'
import './Container.css'

const Container = ({ children }: ContainerProps) => (
	<section className='container'>{children}</section>
)

export default Container
