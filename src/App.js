import React, { Component } from 'react'
import './App.css'
import Navigation from './component/Navigation/Navigation'
import Button from './component/Button/Button'
import SignIn from './component/SignIn/SignIn'
import Register from './component/Register/Register'
import Movies from './component/moviesdb/Movies'
import Picker from './component/picker/Picker'
import Axios from "axios";

const initialState = {
	refresh: false,
	route: 'home',
	signedIn: false,
	username: '',
	movies: [
		{
			title: "The Shawshank Redemption",
			subtitle: "",
			genre: ["Drama"],
			IMDBraiting: 9.3,
			Rating: 9.3,
			year: 1994,
			topCast: ["Tim Robbins", "Morgan Freeman"],
			director: "Frank Darabont",
			Runtime: 144,
			image:"https://live.staticflickr.com/65535/52095383531_7e6079fc6c_b.jpg",
			trailer: "https://youtu.be/NmzuHjWmXOc",
			synopsis: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
			company: ["alone", "family"],
			mood: ["sad", "happy", "neutral"],
			category: ["Movies that may change the way you look at life", "Movie based on a book"],
		}
	],
}
class App extends Component {
	constructor() {
		super()
		this.state = initialState
	}
	onRouteChange = route => {
		if (route === 'signOut') {
			// fetch('https://my-movie-d-base.herokuapp.com/signOut',{
			// 	method: 'post',
			// 	headers: { 'Content-Type': 'application/json' },
			// })
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
	getMovies(){
		fetch('https://my-movie-d-base.herokuapp.com/getMovies', {
			method: 'get',
			headers: { 'Content-Type': 'application/json' },
		})
			.then(response => response.json())
			.then(data => {
				this.setState({ movies: data })
			})
	}
	// IsSignedIn(e){
	// 	Axios.defaults.withCredentials = true;
	// 	if (!e) {
	// 		this.setState({ refresh: true })
	// 		Axios.get("https://my-movie-d-base.herokuapp.com/login").then((response) => {
	// 			if (response.data.loggedIn == true) {
	// 				this.setState({signedIn: true})
	// 			}
	// 		});
	// 	}
	// }
	componentDidMount() {
		// this.IsSignedIn(false)
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
							<Movies movies = {this.state.movies} signedIn = {this.state.signedIn} />
						</div>
					</div>)
				}
			</div>
		)
	}
}

export default App
