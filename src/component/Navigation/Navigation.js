import React from 'react'
import './Navigation.css'
const Navigation = ({ onRouteChange, signedIn }) => {
	return (
		<div className='stat'>
			{
				signedIn  == true
				? 
				<nav>
					<div className='logo'>
					<h4>
						<a
							onClick={() => {
								onRouteChange('home')
							}}
							href='#'
						>
							MMDB
						</a>
					</h4>
				</div>
				<ul className='nav-links'>
					<li>
						<a
							onClick={() => {
								onRouteChange('signOut')
							}}
							href='#'
						>
							Sign Out
						</a>
					</li>
				</ul>
			</nav>
			:
			<nav>
				<div className='logo'>
					<h4>
						<a
							onClick={() => {
								onRouteChange('home')
							}}
							href='#'
						>
							MMDB
						</a>
					</h4>
				</div>
				<ul className='nav-links'>
					<li>
						<a
							onClick={() => {
								onRouteChange('signIn')
							}}
							href='#'
						>
							Log In
						</a>
					</li>
					<li>
						<a
							onClick={() => {
								onRouteChange('register')
							}}
							href='#'
						>
							Register
						</a>
					</li>
				</ul>
			</nav>
			}
		</div>
	)
}

export default Navigation
