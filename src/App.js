import React, { Component } from 'react'
import './App.css'
import Navigation from './component/Navigation/Navigation'
import Button from './component/Button/Button'
import SignIn from './component/SignIn/SignIn'
import Register from './component/Register/Register'
import Movies from './component/moviesdb/Movies'

const initialState = {
	route: "home",
	signedIn: false,
	username: '',
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
		this.setState({route: route});
	}
	onUserChange = (username) => {
		this.setState({username : username})
	}
	onSignIn = () => {
		this.setState({signedIn: true})
	}
	render() {
		return (
			<div className='App'>
				<div className='navbar'>
					<Navigation signedIn={this.state.signedIn} onRouteChange = {this.onRouteChange}/>
				</div>
				{
					this.state.route == "signIn" 
					? 
					<SignIn onRouteChange={this.onRouteChange} onUserChange = {this.onUserChange} onSignIn = {this.onSignIn}/> 
					:
					this.state.route == "register"
					?
					<Register onRouteChange={this.onRouteChange} onUserChange = {this.onUserChange} onSignIn = {this.onSignIn}/> 
					:
					<div className='main'>
					<div className='btn-class pb7'>
						<h2>This website will pick a movie for you</h2>
						<Button />
					</div>
					<div className='pt4' id='top100'>
						{/*<Movies />*/}
					</div>
				</div>
				}
			</div>
		)
	}
}

export default App
