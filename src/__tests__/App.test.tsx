import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
	it('should mount App component as expected', async () => {
		render(<App />)
		const h1Element = screen.getByText('Welcome to Objectives.io', {
			selector: 'h1',
		})
		const h2Element = screen.getByText('Welcome to Objectives.io', {
			selector: 'h2',
		})
		const h3Element = screen.getByText('Welcome to Objectives.io', {
			selector: 'h3',
		})
		const h4Element = screen.getByText('Welcome to Objectives.io', {
			selector: 'h4',
		})
		const pElement = screen.getByText('Welcome to Objectives.io', {
			selector: 'p',
		})
		const smallElement = screen.getByText('Welcome to Objectives.io', {
			selector: 'small',
		})
		expect(h1Element).toBeInTheDocument()
		expect(h2Element).toBeInTheDocument()
		expect(h3Element).toBeInTheDocument()
		expect(h4Element).toBeInTheDocument()
		expect(pElement).toBeInTheDocument()
		expect(smallElement).toBeInTheDocument()
	})
})
