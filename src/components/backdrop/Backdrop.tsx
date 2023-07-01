import { BackdropProps } from './backdrop.types'
import './Backdrop.css'

const Backdrop = ({ onBackdropClick }: BackdropProps) => (
	<section className='backdrop' onClick={onBackdropClick} />
)

export default Backdrop
