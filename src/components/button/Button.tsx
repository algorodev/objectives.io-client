import { ButtonProps } from './button.types'
import './Button.css'

const Button = ({ id, label, type, onButtonClick }: ButtonProps) => {
	return (
		<button id={id} className='button' type={type} onClick={onButtonClick}>
			<label htmlFor={id} className='button__label'>
				{label}
			</label>
		</button>
	)
}

export default Button
