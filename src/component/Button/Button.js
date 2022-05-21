import React from 'react'
import { Scrollchor } from 'react-scrollchor';
import './Button.css'
const Button = () => {
	return (
		<div className='center'>
				<Scrollchor className='btn-center f3 btn pointer pa2 grow' to="#top100" animate={{offset: 10, duration: 600}} href='#top100'>Top 100</Scrollchor>
				<Scrollchor className='btn-center f3 btn pointer pa2 grow' to="#top100" animate={{offset: 10, duration: 600}} href='#top100'>Generate</Scrollchor>
		</div>
	)
}

export default Button
