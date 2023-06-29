import { ModalProps } from '../modal.types'
import close from '../../../assets/icons/close.svg'
import './ModalContainer.css'

const ModalContainer = ({ title, children, onClose }: ModalProps) => (
	<section className='modal'>
		<div className='modal__header'>
			<p className='modal__title'>{title}</p>
			<img
				className='modal__action'
				src={close}
				alt='close-icon'
				onClick={onClose}
			/>
		</div>
		<div className='modal__body'>{children}</div>
	</section>
)

export default ModalContainer
