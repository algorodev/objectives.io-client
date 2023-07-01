import { TodoI } from '../../types/todo.types'
import {
	CreateTodoActionI,
	DeleteTodoActionI,
	UpdateTodoActionI,
} from './todo.interfaces'

export type CreateTodoCreator = (todo: TodoI) => CreateTodoActionI

export type UpdateTodoCreator = (id: string) => UpdateTodoActionI

export type DeleteTodoCreator = (id: string) => DeleteTodoActionI
