import React, { Component } from 'react'
import './App.css'
import Navigation from './component/Navigation/Navigation'
import Button from './component/Button/Button'
import SignIn from './component/SignIn/SignIn'
import Register from './component/Register/Register'
import Movies from './component/moviesdb/Movies'
import Picker from './component/picker/Picker'

const initialState = {
	route: 'home',
	signedIn: false,
	username: '',
	movies: [],
}
class App extends Component {
	constructor() {
		super()
		this.state = initialState
	}
	onRouteChange = route => {
		if (route === 'signOut') {
			localStorage.removeItem('token')
			this.setState(initialState)
		}
		this.setState({ route: route })
	}
	onUserChange = username => {
		this.setState({ username: username })
	}
	onSignIn = () => {
		this.setState({ signedIn: true })
	}
	getMovies = () => {
		fetch('https://my-movie-d-base.herokuapp.com/getMovies', {
			method: 'get',
			headers: { 'Content-Type': 'application/json' },
		})
			.then(response => response.json())
			.then(data => {
				this.setState({ movies: data })
			})
	}
	IsSignedIn = () => {
		let token = localStorage.getItem('token')
		if (token) {
			fetch('https://my-movie-d-base.herokuapp.com/isSignedIn', {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				'Authorization': token
				}
			})
			.then(data => data.json())
			.then(response => {
				if (response == 'valid'){
					this.setState({ signedIn: true})
				}
			})
		}
	}
	componentDidUpdate(prevProps, prevState){
		if (prevState.signedIn !== this.state.signedIn) {
			this.IsSignedIn()
		}
		if (this.state.movies.length == 1) {
			this.getMovies();
		}
	}
	componentDidMount() {
		this.IsSignedIn()
		this.getMovies()
	}

	render() {
		//this.getMovies()
		//console.log(this.state.movies)
		return (
			<div className='App'>
				<div className='navbar'>
					<Navigation
						signedIn={this.state.signedIn}
						onRouteChange={this.onRouteChange}
					/>
				</div>
				{this.state.route == 'signIn' ? (
					<SignIn
						onRouteChange={this.onRouteChange}
						onUserChange={this.onUserChange}
						onSignIn={this.onSignIn}
					/>
				) : this.state.route == 'register' ? (
					<Register
						onRouteChange={this.onRouteChange}
						onUserChange={this.onUserChange}
						onSignIn={this.onSignIn}
					/>
				) : this.state.route == 'generate' ? (
				<div className='pt4'>
					<Picker onRouteChange={this.onRouteChange} movies = {this.state.movies} signedIn = {this.state.signedIn}/>
				</div>)
				:
				(
					<div className='main'>
						<div className='btn-class pb7'>
							<div className='MainText'>This website will pick a movie for you</div>
							<Button onRouteChange = {this.onRouteChange} getMovies = {this.getMovies}/>
						</div>
						<div className='pt7' id='top100'>
							{
								this.state.movies.length == 0 
								?
								<div className='loading'>Loading...</div>
								:
								<Movies movies = {this.state.movies} signedIn = {this.state.signedIn} />
							}
						</div>
					</div>)
				}
			</div>
		)
	}
}

export default App
