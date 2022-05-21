import React from 'react';
import swal from 'sweetalert';
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            username: ''
        }
    }
    onUsernameChange = (event) => {
        this.setState({name: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({password : event.target.value})
    }
    onSubmitRegister = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                password: this.state.password,
                username: this.state.name
            })
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            if(data !== 'You are already registered, please sign in'){
                swal("Good job!", "You did it))", "success");
                this.props.onRouteChange('home')
            }
            else{
                swal ( "Something wrong" ,  "Please try to deal with this error by yourself" ,  "error" )
            }
        })
    }


    render() {
        const {onRouteChange} = this.props;
        return (
            <article className="pa6 white">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="name">Username</label>
                    <input
                    onChange={this.onUsernameChange}
                    className="white pa2 input-reset ba bg-transparent w-100 measure" type="name" name="name"  id="name"/>
                </div>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                    <input
                    onChange={this.onPasswordChange}
                    className="white pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
                </div>
                </fieldset>
                <div className="mt3"><input 
                onClick={this.onSubmitRegister}
                className="white ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6" 
                type="submit" 
                value="Register"/></div>
                <div className="mt3"><input 
                onClick={() => onRouteChange('signIn')}
                className="white ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6" 
                type="submit" 
                value="Sign In"/></div>
            </article>
        );
    }
}

export default Register;