import React from 'react'
import './picker.css'
class Picker extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			questions: 1,
		}
	}
	render() {
		return this.state.questions == 1 ? (
			<div className='vertical'>
				<div className='dib br2 pa3 ma3 shadow-5 cardComponent1'>
					<div>1</div>
					<div className=''>
						<div className='center'>
							<a href='#'>
								<button
									className='btn grow pointer tc'
									onClick={() => {
										this.props.onRouteChange('home')
									}}
								>
									Home
								</button>
							</a>
							<a href='#'>
								<button
									className='btn grow pointer tc'
									onClick={() => {
										this.setState({ questions: 2 })
									}}
								>
									Next
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		) : this.state.questions == 2 ? (
			<div className='vertical'>
				<div className='dib br2 pa3 ma3 shadow-5 cardComponent1'>
					<div>2</div>
					<div className=''>
						<div className='center'>
							<a href='#'>
								<button
									className='btn grow pointer tc'
									onClick={() => {
										this.setState({ questions: 1 })
									}}
								>
									Previous
								</button>
							</a>
							<a href='#'>
								<button
									className='btn grow pointer tc'
									onClick={() => {
										this.setState({ questions: 3 })
									}}
								>
									Next
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		) : this.state.questions == 3 ? (
			<div className='vertical'>
				<div className='dib br2 pa3 ma3 shadow-5 cardComponent1'>
					<div>3</div>
					<div className=''>
						<div className='center'>
							<a href='#'>
								<button
									className='btn grow pointer tc'
									onClick={() => {
										this.setState({ questions: 2 })
									}}
								>
									Previous
								</button>
							</a>
							<a href='#'>
								<button
									className='btn grow pointer tc'
									onClick={() => {
										this.setState({ questions: 4 })
									}}
								>
									Next
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		) : this.state.questions == 4 ? (
			<div className='vertical'>
				<div className='dib br2 pa3 ma3 shadow-5 cardComponent1'>
					<div>4</div>
					<div className=''>
						<div className='center'>
							<a href='#'>
								<button
									className='btn grow pointer tc'
									onClick={() => {
										this.setState({ questions: 3 })
									}}
								>
									Previous
								</button>
							</a>
							<a href='#'>
								<button
									className='btn grow pointer tc'
									onClick={() => {
										this.setState({ questions: 5 })
									}}
								>
									Next
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		) : (
			<div className='vertical'>
				<div className='dib br2 pa3 ma3 shadow-5 cardComponent1'>
					<div>5</div>
					<div className=''>
						<div className='center'>
							<a href='#'>
								<button
									className='btn grow pointer tc'
									onClick={() => {
										this.setState({ questions: 4 })
									}}>
									Previous
								</button>
							</a>
							<a href='#'>
								<button
									className='btn grow pointer tc'
									onClick={() => {}}
								>
									Finish
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Picker
