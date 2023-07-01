import { TodoI } from '../../types/todo.types'
import {
	CreateTodoActionTypes,
	DeleteTodoActionTypes,
	UpdateTodoActionTypes,
} from './todo.constants'
import {
	CreateTodoCreator,
	DeleteTodoCreator,
	UpdateTodoCreator,
} from './todo.creators'
import {
	CreateTodoActions,
	DeleteTodoActions,
	UpdateTodoActions,
} from './todo.interfaces'

export const CreateTodoAction: CreateTodoCreator = (todo: TodoI) => {
	return { type: CreateTodoActionTypes.CREATE_TODO, todo }
}

export const UpdateTodoAction: UpdateTodoCreator = (id: string) => {
	return { type: UpdateTodoActionTypes.UPDATE_TODO, id }
}

export const DeleteTodoAction: DeleteTodoCreator = (id: string) => {
	return { type: DeleteTodoActionTypes.DELETE_TODO, id }
}

export type TodoActions =
	| CreateTodoActions
	| UpdateTodoActions
	| DeleteTodoActions
