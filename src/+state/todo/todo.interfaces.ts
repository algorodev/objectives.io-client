import { TodoI } from '../../types/todo.types'
import {
	CreateTodoActionTypes,
	DeleteTodoActionTypes,
	UpdateTodoActionTypes,
} from './todo.constants'

export interface CreateTodoActionI {
	type: CreateTodoActionTypes.CREATE_TODO
	todo: TodoI
}

export type CreateTodoActions = CreateTodoActionI

export interface UpdateTodoActionI {
	type: UpdateTodoActionTypes.UPDATE_TODO
	id: string
}

export type UpdateTodoActions = UpdateTodoActionI

export interface DeleteTodoActionI {
	type: DeleteTodoActionTypes.DELETE_TODO
	id: string
}

export type DeleteTodoActions = DeleteTodoActionI
