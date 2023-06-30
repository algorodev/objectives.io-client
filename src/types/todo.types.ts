export type TodoState = {
	todos: TodoI[]
}

export interface TodoI {
	id: string
	title: string
	completed: boolean
}

export interface TodoFormI {
	title: string
}
