import React, { Component } from 'react'
import './App.css'
import Navigation from './component/Navigation/Navigation'
import Button from './component/Button/Button'
import SignIn from './component/SignIn/SignIn'
const initialState = {
	route: "home",
	signedIn: false,
}
class App extends Component {
	constructor() {
		super()
		this.state = initialState
	}
	onRouteChange = (route) => {
		if (route === 'signOut') {
			this.setState(initialState)
		}
		else if (route === 'home'){
			this.setState({isSignedIn: true})
		}
		this.setState({route: route});
	}
	render() {
		return (
			<div className='App'>
				<div className='navbar'>
					<Navigation signedIn={this.state.signedIn} onRouteChange = {this.onRouteChange}/>
				</div>
				{
					this.state.route == "signIn" ? <SignIn onRouteChange={this.onRouteChange}/> 
					: 
					<div className='main'>
					<div className='btn-class'>
						<h2>This website will pick a movie for you</h2>
						<Button />
					</div>
				</div>
				}
			</div>
		)
	}
}

export default App
