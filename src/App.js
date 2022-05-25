import React, { Component } from 'react'
import './App.css'
import Navigation from './component/Navigation/Navigation'
import Button from './component/Button/Button'
import SignIn from './component/SignIn/SignIn'
import Register from './component/Register/Register'
import Movies from './component/moviesdb/Movies'
import Picker from './component/picker/Picker'
const initialState = {
	route: "home",
	signedIn: false,
	username: '',
	movies: [
		{
			title: "Hacksaw Ridge ",
			subtitle: "Just a simple subtitle",
			genre: ["Drama", "War movie"],
			IMDBrating: 9.3,
			Rating: 9.3,
			year: 2016,
			topCast: ["Andrew Garfield", "Sam Worthington", "Teresa Palmer"],
			director: "Mel Gibson",
			Runtime: 139,
			image:"https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_FMjpg_UX1000_.jpg",
			trailer: "https://www.youtube.com/watch?v=s2-1hz1juBI&ab_channel=LionsgateMovies",
			synopsis: "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
			company: ["friends", "alone"],
			mood: "neutral",
			category: ["War movie", "Movies that may change the way you look at life"],
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
					<div className=''>
					</div>
					<div className='pt4'>
						<Picker/>
					</div>
					<div className='pt4' id='top100'>
						<Movies movies = {this.state.movies} signedIn = {this.state.signedIn} />
					</div>
				</div>
				}
			</div>
		)
	}
}

export default App
