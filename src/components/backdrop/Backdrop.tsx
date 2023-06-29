import { BackdropProps } from './backdrop.types'

const Backdrop = ({ onBackdropClick }: BackdropProps) => (
	<section className='backdrop' onClick={onBackdropClick} />
)

export default Backdrop
