import React from 'react'
import './Navigation.css'
const Navigation = () => {
	return (
		<div className='stat'>
			<nav>
				<div className='logo'>
					<h4>
						<a href='#'>MMDB</a>
					</h4>
				</div>
				<ul className='nav-links'>
					<li>
						<a href='#'>Log In</a>
					</li>
					<li>
						<a href='#'>Register</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navigation
