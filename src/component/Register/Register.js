import React from 'react'
import swal from 'sweetalert'
import './Register.css'
class Register extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			password: '',
			username: '',
		}
	}
	onUsernameChange = event => {
		this.setState({ username: event.target.value })
	}
	onPasswordChange = event => {
		this.setState({ password: event.target.value })
	}
	onSubmitRegister = () => {
		if (this.state.username && this.state.password) {
		fetch('https://my-movie-d-base.herokuapp.com/register', {
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
				if (data != "You are already registered, please sign in" && data != "error" && data != "") {
					swal('Good job!', 'You did it))', 'success')
					this.props.onUserChange(this.state.username)
					this.props.onSignIn()
					localStorage.setItem('id' , data)
					this.props.onRouteChange('home')
				} else if (data == "You are already registered, please sign in") {
					swal(
						'You are already registered',
						'Please sign in',
						'error'
					)
				} 
				else {
					swal(
						'Something wrong',
						'Please try to deal with this error by yourself',
						'error'
					)
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
				<div className='titleTextN'>Register</div>
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
							onClick={this.onSubmitRegister}
							className='b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f4 dib'
						>Register</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Register
