import React from 'react'
import ReactDOM from 'react-dom/client'
import 'tachyons'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
reportWebVitals()
