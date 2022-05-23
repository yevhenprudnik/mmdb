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
	movies: [
		{
		title: "Pirates of the Caribbean",
		part: 3,
		subtitle: "At World's End",
		genre: ["Action", "Adventure", "Fantasy"],
		IMDBraiting: 0,
		stRaiting: 8.9,
		adRaiting: 8.7,
		year: 2007,
		short: "Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.",
		topCast: ["Johnny Depp", "Orlando Bloom", "Keira Knightley"],
		director: "Gore Verbinski",
		Runtime: 167,
		image:"https://cdn-products.eneba.com/resized-products/5228Fg1_350x200_1x-0.jpg",
		company: ["friends", "family", "myself"],
	}
]
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
	componentDidMount(){
		fetch('http://localhost:3001/getMovies', {
			method: 'get',
			headers: { 'Content-Type': 'application/json' }
		})
			.then(response => response.json())
			.then(data => {
				this.setState({movies: data})
			})
	}
	render() {
		//console.log(this.state.movies)
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
						<Movies movies = {this.state.movies} />
					</div>
				</div>
				}
			</div>
		)
	}
}

export default App
