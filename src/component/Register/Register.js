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
		this.setState({ name: event.target.value })
	}
	onPasswordChange = event => {
		this.setState({ password: event.target.value })
	}
	onSubmitRegister = () => {
		fetch('https://my-movie-d-base.herokuapp.com/register', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				password: this.state.password,
				username: this.state.name,
			}),
		})
			.then(response => response.json())
			.then(data => {
				console.log(data)
				if (data != "You are already registered, please sign in" && data != "error" && data != "") {
					swal('Good job!', 'You did it))', 'success')
					this.props.onRouteChange('home')
					this.props.onUserChange(this.state.username)
					this.props.onSignIn()
				} else {
					swal(
						'Something wrong',
						'Please try to deal with this error by yourself',
						'error'
					)
				}
			})
	}

	render() {
		const { onRouteChange, onUserChange } = this.props
		return (
			<div className='cont'>
				<article className='br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5'>
					<main className='pa4 black-80'>
						<form className='measure'>
							<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
								<legend className='f1 fw4 ph0 mh0 text-space'>Register</legend>
								<div className='mt3'>
									<label className='db fw6 lh-copy f5 text-space' htmlFor='name'>
										Username
									</label>
									<input
										onChange={this.onUsernameChange}
										className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
										type='text'
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
									/>
								</div>
							</fieldset>
							<div className=''>
								<input
									onClick={this.onSubmitRegister}
									className='b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f4 dib'
									type='submit'
									value='Register'
								/>
							</div>
						</form>
					</main>
				</article>
			</div>
		)
	}
}

export default Register
