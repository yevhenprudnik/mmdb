import React from 'react';
import swal from 'sweetalert';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    onUsernameChange = (event) => {
        this.setState({username : event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({password : event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signIn', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data =>{
            if(data !== "error"){
                //this.props.loadUser(data)
                swal("Good job!", "You signed in!", "success");
                this.props.onRouteChange("home")
            }
            else{
                swal ( "Oops" ,  "Wrong email or password!" ,  "error" )
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
                    <label className="db fw4 lh-copy f6" htmlFor="email-address">Username</label>
                    <input
                    onChange={this.onUsernameChange}
                    className="white pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
                </div>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                    <input
                    onChange={this.onPasswordChange}
                    className="white pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
                </div>
                <div className="mt3"><input 
                onClick={() => onRouteChange('Register')}
                className="white ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6" 
                type="submit" 
                value="Register"/></div>
                </fieldset>
                <div className="mt3"><input 
                onClick={this.onSubmitSignIn}
                className="white ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6" 
                type="submit" 
                value="Sign In"/></div> 
            </article>
        );
    }
}

export default SignIn;