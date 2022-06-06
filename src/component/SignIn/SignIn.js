import React from 'react'
import swal from 'sweetalert'
import './SignIn.css'
import Swal from 'sweetalert2'
import Axios from "axios";
class SignIn extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
		}
	}
	onUsernameChange = event => {
		this.setState({ username: event.target.value })
	}
	onPasswordChange = event => {
		this.setState({ password: event.target.value })
	}

	onSubmitSignIn = () => {
		if (this.state.username && this.state.password) {
		fetch('https://my-movie-d-base.herokuapp.com/signIn', {
			method: 'post',
			headers: { 'Content-Type': 'application/json',
						'Accept': 'application/json'
			},
			body: JSON.stringify({
				password: this.state.password,
				username: this.state.username,
			}),
		})
		.then(response => response.json())
		.then(data => {
				if (data != "error") {
					//this.props.loadUser(data)
					Swal.fire({
						icon: 'success',
						title: 'You signed in',
						customClass: {
						popup: 'my-swal',
						},
					})
					this.props.onUserChange(this.state.username)
					this.props.onSignIn()
					localStorage.setItem('id' , data._id)
					this.props.onRouteChange('home')
				} else {
					swal('Oops', 'Wrong username or password!', 'error')
				}
			})
		}
		else {
			swal('Oops', 'Wrong username or password!', 'error')
		}
	}
	render() {
		return (
			<div className='cont'>
				<div className='titleTextN'>Sign In</div>
					<div className='mt3'>
						<div
							className='db fw6 lh-copy f5 text-space'
							htmlFor='username'
						>
							Username
						</div>
						<input
							onChange={this.onUsernameChange}
							className='pa2 input-reset input-reset1 ba bg-transparent hover-bg-black hover-white'
							type='Username'
						/>
					</div>
					<div className='mv3'>
						<div
							className='db fw6 lh-copy f5 text-space'
						>
							Password
						</div>
						<input
							onChange={this.onPasswordChange}
							className='b pa2 input-reset input-reset1 ba bg-transparent hover-bg-black hover-white w-100'
							type='password'
						/>
					</div>
				<div className='container center'>
					<div className=''>
						<button
							onClick={this.onSubmitSignIn}
							className='b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f4 dib'
						>Sign In</button>
					</div>
				</div>
			</div>
		)
	}
}

export default SignIn
