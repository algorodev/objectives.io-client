import { combineReducers } from 'redux'
import todoReducer from './todo/todo.reducer'

export const RootReducer = combineReducers({
	todo: todoReducer,
})

export type RootState = ReturnType<typeof RootReducer>

export default RootReducer
