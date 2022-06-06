import React from 'react'
import { Scrollchor } from 'react-scrollchor'
import './Button.css'
const Button = ({onRouteChange, getMovies}) => {
	return (
		<div className='center-btn' onMouseEnter={() => getMovies()}>
			<Scrollchor
				className='center-btn scrollchor btn-bn pointer grow'
				to='#top100'
				animate={{ offset: 190, duration: 600 }}
				href='#top100'
			>
				Top 100
			</Scrollchor>
			<Scrollchor
				className='center-btn btn-bn scrollchor pointer grow'
				onClick={() => onRouteChange('generate')}
			>
				Generate
			</Scrollchor>
		</div>
	)
}

export default Button
