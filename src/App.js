import React, { Component } from 'react'
import './App.css'
import Navigation from './component/Navigation/Navigation'
import Button from './component/Button/Button'
class App extends Component {
	constructor() {
		super()
		this.state = {}
	}
	render() {
		return (
			<div className='App'>
				<div className='navbar'>
					<Navigation />
				</div>
				<div className='main'>
					<div className='btn-class'>
						<h2>This website will pick a movie for you</h2>
						<Button />
					</div>
				</div>
			</div>
		)
	}
}

export default App
