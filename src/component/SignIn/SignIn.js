import React from 'react'
import swal from 'sweetalert'
import './SignIn.css'
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
		fetch('http://localhost:3001/signIn', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password,
			}),
		})
			.then(response => response.json())
			.then(data => {
				if (data !== 'error') {
					//this.props.loadUser(data)
					swal('Good job!', 'You signed in!', 'success')
					this.props.onRouteChange('home')
					this.props.onUserChange(this.state.username)
					this.props.onSignIn()
				} else {
					swal('Oops', 'Wrong email or password!', 'error')
				}
			})
	}
	render() {
		const { onRouteChange } = this.props
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
										htmlFor='email-address'
									>
										Name
									</label>
									<input
										onChange={this.onUsernameChange}
										className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
										type='email'
										name='email-address'
										id='email-address'
									/>
								</div>
								<div className='mv3'>
									<label
										className='db fw6 lh-copy f5 text-space'
										htmlFor='password'
									>
										Password
									</label>
									<input
										onChange={this.onPasswordChange}
										className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
										type='password'
										name='password'
										id='password'
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
