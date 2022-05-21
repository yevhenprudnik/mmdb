import React, { Component } from 'react'
import './App.css'
import Navigation from './component/Navigation/Navigation'
import Button from './component/Button/Button'
class App extends Component {
	constructor() {
		super()
		this.state = {
			nav_click: false,
		}
	}
	render() {
		return (
			<div className='App'>
				<div className='navbar'>
					<Navigation />
				</div>
				<div className='main'>
					<Button />
				</div>
			</div>
		)
	}
}

export default App
