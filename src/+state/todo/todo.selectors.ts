import { createSelector } from 'reselect'
import { RootState } from '../reducer'

const CartState = (state: RootState) => state.todo

export const getTodos = createSelector([CartState], state => state.todos)
