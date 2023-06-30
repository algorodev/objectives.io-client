import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import RootReducer from './reducer'

const hydrateConfig = {
	key: 'root',
	storage: storage,
}

const hydrateReducer = persistReducer(hydrateConfig, RootReducer)

export const store = configureStore({
	reducer: hydrateReducer,
})

export const hydrate = persistStore(store)
