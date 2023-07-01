import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { hydrate, store } from './+state/store.ts'
import './styles/index.css'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate persistor={hydrate}>
				<App />
			</PersistGate>
		</Provider>
	</StrictMode>,
)
