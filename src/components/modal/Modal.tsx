import { createPortal } from 'react-dom'
import Backdrop from '../backdrop/Backdrop'
import ModalContainer from './modalContainer/ModalContainer'
import { ModalProps } from './modal.types'
import { ReactNode } from 'react'

const Modal = ({ children, onClose }: ModalProps) => (
	<section>
		{createPortal(
			(<Backdrop onBackdropClick={onClose} />) as ReactNode,
			document.getElementById('modal') ||
				(document.createElement('div') as HTMLElement),
		)}
		{createPortal(
			(
				<ModalContainer onClose={onClose}>{children}</ModalContainer>
			) as ReactNode,
			document.getElementById('modal') as HTMLElement,
		)}
	</section>
)

export default Modal
