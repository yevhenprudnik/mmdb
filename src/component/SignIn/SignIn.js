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
		Axios.defaults.withCredentials = true;
		Axios.post("https://my-movie-d-base.herokuapp.com/signIn", {
			username: this.state.username,
			password: this.state.password,
		})
			.then(response => {
				if (response.data != "error") {
					//this.props.loadUser(data)
					Swal.fire({
						icon: 'success',
						title: 'You signed in',
						customClass: {
						popup: 'my-swal',
						},
					})
					this.props.onRouteChange('home')
					this.props.onUserChange(this.state.username)
					this.props.onSignIn()
				} else {
					swal('Oops', 'Wrong email or password!', 'error')
				}
			})
	}
	render() {
		return (
			<div className='cont'>
				<article className='br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5'>
					<main className='pa4 black-80'>
						<form className='measure'>
							<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
								<legend className='f1 fw4 ph0 mh0 text-space'>Sign In</legend>
								<div className='mt3'>
									<label
										className='db fw6 lh-copy f5 text-space'
										htmlFor='username'
									>
										Username
									</label>
									<input
										onChange={this.onUsernameChange}
										className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
										type='Username'
									/>
								</div>
								<div className='mv3'>
									<label
										className='db fw6 lh-copy f5 text-space'
									>
										Password
									</label>
									<input
										onChange={this.onPasswordChange}
										className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
										type='password'
									/>
								</div>
							</fieldset>
							<div className='container center'>
								<div className=''>
									<input
										onClick={this.onSubmitSignIn}
										className='b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f4 dib'
										type='submit'
										value='Sign in'
									/>
								</div>
							</div>
						</form>
					</main>
				</article>
			</div>
		)
	}
}

export default SignIn
