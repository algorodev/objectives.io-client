import { MouseEvent } from 'react'

type ButtonType = 'button' | 'reset' | 'submit'

export type ButtonProps = {
	id: string
	label: string
	type: ButtonType
	onButtonClick: (event: MouseEvent) => void
}
