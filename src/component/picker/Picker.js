import React from 'react'
import './picker.css'
import sad from './sad.png'
import happy from './happy.png'
import neutral from './neutral.png'
import classNames from 'classnames'
import Movies from '../moviesdb/Movies'
const initialState = {
	questions: 1,
	mood: '',
	company: '',
	category: new Set(),
	genres: new Set(),
	year: new Date().getFullYear(),
	movies: [],
	runtime: 0
}
class Picker extends React.Component {
	constructor(props) {
		super(props)
		this.state = initialState
	}
	getRecommendations = () => {
		this.setState({ questions: "res"})
		fetch('https://my-movie-d-base.herokuapp.com/getRecommendations', {
			method: 'post',
			headers: { 'Content-Type': 'application/json',
						'Accept': 'application/json'
			},
			body: JSON.stringify({
				genres: Array.from(this.state.genres),
				category: Array.from(this.state.category),
				company: this.state.company,
				mood: this.state.mood,
				year: this.state.year, 
				runtime: this.state.runtime
			}),
		})
			.then(response => response.json())
			.then(data => {
				this.setState({ movies: data })
			})
	}
	render() {
		return this.state.questions == 1 ? (
			<div className='vertical'>
				<div className='dib br2 pa3 ma3 shadow-5 cardComponent1'>
					<div>
						<div className=''>
							<div className='subtitleText2'>
								How do You feel today?
							</div>
							<span className='container'>
								<div className='icon grow'>
									<img src={happy} className={classNames({
										'selected': this.state.mood === 'happy'
									})} onClick = {() => this.setState({mood: 'happy'})}/>
								</div>
								<div className='icon grow'>
									<img src={neutral} className={classNames({
										'selected': this.state.mood == 'neutral'
									})} onClick = {() => this.setState({mood: 'neutral'})}/>
								</div>
								<div className='icon grow'>
									<img src={sad} className={classNames({
										'selected': this.state.mood == 'sad'
									})} onClick = {() => this.setState({mood:'sad'})}/>
								</div>
							</span>
						</div>
					</div>
					<div className='pb3'>
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
							{
								this.state.mood != '' ?
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
							:
							<button className='btn grow pointer tc none'>
									Next
							</button>
							}
						</div>
					</div>
				</div>
			</div>
		) : this.state.questions == 2 ? (
			<div className='vertical'>
				<div className='dib br2 pa3 ma3 shadow-5 cardComponent1'>
				<div className='subtitleText2'>
					What's your occasion?
				</div>
				<div className='subtitleText3 topOcc grow pointer'>
					<div className={classNames('pa2',{
										'selectedText': this.state.company == 'alone'
									})}
									onClick={() => this.setState({ company : "alone"})}>
						Just watching a movie by myself
					</div>
				</div>
				<div className='subtitleText3 grow pointer'>
					<div className={classNames('pa2',{
										'selectedText': this.state.company == 'friends'
									})}
									onClick={() => this.setState({ company : "friends"})}>
						Watching a movie with friends
					</div>
				</div>
				<div className='subtitleText3 grow pointer'>
					<div className={classNames('pa2',{
										'selectedText': this.state.company == 'date'
									})}
									onClick={() => this.setState({ company : "date"})}>
						Movie Date
					</div>
				</div>
				<div className='subtitleText3 bottomOcc grow pointer'>
					<div className={classNames('pa2',{
										'selectedText': this.state.company == 'family'
									})}
									onClick={() => this.setState({company : "family"})}>
						Watching a movie with family
					</div>
				</div>
					<div className='pb3'>
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
							{
								this.state.company != '' ?
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
							:
							<button className='btn grow pointer tc none'>
									Next
							</button>
							}
						</div>
					</div>
				</div>
			</div>
		) : this.state.questions == 3 ? (
			<div className='vertical'>
				<div className='dib br2 pa3 ma3 shadow-5 cardComponent1'>
				<div className='subtitleText2'>
					What kinds of movies do you like?
				</div>
					<div className='container2 topOcc'>
						<div className='subtitleText4 grow pointer w-50'>
							<div className={classNames('pb1',{
											'selectedText': this.state.category.has('Epic movie')
										})}
										onClick = {() => this.setState(({ category }) => ({
											category: new Set(category).add('Epic movie')
										}))}>
								Epic movie
							</div>
						</div>
						<div className='subtitleText4 grow pointer w-40'>
							<div className={classNames('pb1',{
												'selectedText': this.state.category.has('Dark comedy')
											})}
											onClick = {() => this.setState(({ category }) => ({
												category: new Set(category).add('Dark comedy')
											}))}>
								Dark comedy
							</div>
						</div>
					</div>
				<div className='container2'>
						<div className='subtitleText4 grow pointer w-50'>
						<div className={classNames('pb1',{
											'selectedText': this.state.category.has('Movie based on a book')
										})}
										onClick = {() => this.setState(({ category }) => ({
											category: new Set(category).add('Movie based on a book')
										}))}>
							Movie based on a book
						</div>
						</div>
						<div className='subtitleText4 grow pointer w-40'>
							<div className={classNames('pb1',{
											'selectedText': this.state.category.has('Space Movie')
										})}
										onClick = {() => this.setState(({ category }) => ({
											category: new Set(category).add('Space Movie')
										}))}>
								Space Movie
							</div>
						</div>
				</div>
				<div className='container2'>
						<div className='subtitleText4 grow pointer w-50'>
						<div className={classNames('pb1',{
											'selectedText': this.state.category.has('Movies that may change the way you look at life')
										})}
										onClick = {() => this.setState(({ category }) => ({
											category: new Set(category).add('Movies that may change the way you look at life')
										}))}>
							Movies that may change the way you look at life
						</div>
						</div>
						<div className='subtitleText4 grow pointer w-40'>
							<div className={classNames('pb1',{
											'selectedText': this.state.category.has('Love story')
										})}
										onClick = {() => this.setState(({ category }) => ({
											category: new Set(category).add('Love story')
										}))}>
								Love story
							</div>
						</div>
				</div>
				<div className='container2'>
						<div className='subtitleText4 grow pointer w-50'>
						<div className={classNames('pb1',{
											'selectedText': this.state.category.has('Movies based on a true story')
										})}
										onClick = {() => this.setState(({ category }) => ({
											category: new Set(category).add('Movies based on a true story')
										}))}>
							Movies based on a true story
						</div>
						</div>
						<div className='subtitleText4 grow pointer w-40'>
							<div className={classNames('pb1',{
											'selectedText': this.state.category.has('Superhero movie')
										})}
										onClick = {() => this.setState(({ category }) => ({
											category: new Set(category).add('Superhero movie')
										}))}>
								Superhero movie
							</div>
						</div>
				</div>
				<div className='container2'>
						<div className='subtitleText4 grow pointer w-50'>
						<div className={classNames('pb1',{
											'selectedText': this.state.category.has('War movie')
										})}
										onClick = {() => this.setState(({ category }) => ({
											category: new Set(category).add('War movie')
										}))}>
							War movie
						</div>
						</div>
						<div className='subtitleText4 grow pointer w-40'>
							<div className={classNames('pb1',{
											'selectedText': this.state.category.has('Psychological movie')
										})}
										onClick = {() => this.setState(({ category }) => ({
											category: new Set(category).add('Psychological movie')
										}))}>
								Psychological movie
							</div>
						</div>
				</div>
				<div className='w-100'>
					<div className='grow pointer w-40 center Text4 tc bottomOcc'>
						<div className={classNames('pb1',{
										'selectedText': this.state.category.has('I dont have preference')
									})}
									onClick = {() => this.setState({
										category: new Set().add('I dont have preference')
									})}>
							I don't have preference
						</div>
					</div>
				</div>
					<div className='pb3'>
						<div className='center2	'>
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
									onClick={() => {this.setState({category : new Set()})}}
								>
									Clear
								</button>
							</a>
							{
								this.state.category.size != 0 ?
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
							:
							<button className='btn grow pointer tc none'>
									Next
							</button>
							}
						</div>
					</div>
				</div>
			</div>
			//-------------------------------Genres---------------------------------//
		) : this.state.questions == 4 ? (
			<div className='vertical'>
				<div className='dib br2 pa3 ma3 shadow-5 cardComponent1'>
					<div className='subtitleText2'>
						What genres do you like?
					</div>
					<div className='container3 topOcc'>
						<div className='subtitleText5 grow pointer w-40'>
						<div className={classNames('pb1',{
											'selectedText': this.state.genres.has('Drama')
										})}
										onClick = {() => this.setState(({ genres }) => ({
											genres: new Set(genres).add('Drama')
										}))}>
								Drama
						</div>
						</div>
						<div className='subtitleText5 grow pointer w-40'>
							<div className={classNames('pb1',{
											'selectedText': this.state.genres.has('Comedy')
										})}
										onClick = {() => this.setState(({ genres }) => ({
											genres: new Set(genres).add('Comedy')
										}))}>
								Comedy
							</div>
						</div>
						<div className='subtitleText5 grow pointer w-40'>
						<div className={classNames('pb1',{
											'selectedText': this.state.genres.has('Animation')
										})}
										onClick = {() => this.setState(({ genres }) => ({
											genres: new Set(genres).add('Animation')
										}))}>
							Animation
						</div>
						</div>
				</div>
				<div className='container3'>
						<div className='subtitleText5 grow pointer w-40'>
						<div className={classNames('pb1',{
											'selectedText': this.state.genres.has('Horror')
										})}
										onClick = {() => this.setState(({ genres }) => ({
											genres: new Set(genres).add('Horror')
										}))}>
							Horror
						</div>
						</div>
						<div className='subtitleText5 grow pointer w-40'>
							<div className={classNames('pb1',{
											'selectedText': this.state.genres.has('Thriller')
										})}
										onClick = {() => this.setState(({ genres }) => ({
											genres: new Set(genres).add('Thriller')
										}))}>
								Thriller
							</div>
						</div>
						<div className='subtitleText5 grow pointer w-40'>
						<div className={classNames('pb1',{
											'selectedText': this.state.genres.has('Romance')
										})}
										onClick = {() => this.setState(({ genres }) => ({
											genres: new Set(genres).add('Romance')
										}))}>
							Romance
						</div>
						</div>
				</div>
				<div className='container3'>
					<div className='subtitleText5 grow pointer w-40'>
						<div className={classNames('pb1',{
										'selectedText': this.state.genres.has('Sci-Fi')
									})}
									onClick = {() => this.setState(({ genres }) => ({
										genres: new Set(genres).add('Sci-Fi')
									}))}>
							Sci-Fi
						</div>
					</div>
					<div className='subtitleText5 grow pointer w-40'>
						<div className={classNames('pb1',{
										'selectedText': this.state.genres.has('Adventure')
									})}
									onClick = {() => this.setState(({ genres }) => ({
										genres: new Set(genres).add('Adventure')
									}))}>
							Adventure
						</div>
					</div>
					<div className='subtitleText5 grow pointer w-40'>
						<div className={classNames('pb1',{
										'selectedText': this.state.genres.has('Action')
									})}
									onClick = {() => this.setState(({ genres }) => ({
										genres: new Set(genres).add('Action')
									}))}>
							Action
						</div>
					</div>							
				</div>
				<div className='container3 bottomOccc'>
						<div className='subtitleText5 grow pointer w-40'>
						<div className={classNames('pb1',{
											'selectedText': this.state.genres.has('Crime')
										})}
										onClick = {() => this.setState(({ genres }) => ({
											genres: new Set(genres).add('Crime')
										}))}>
							Crime
						</div>
						</div>
						<div className='subtitleText5 grow pointer w-40'>
							<div className={classNames('pb1',{
											'selectedText': this.state.genres.has('Mystery')
										})}
										onClick = {() => this.setState(({ genres }) => ({
											genres: new Set(genres).add('Mystery')
										}))}>
								Mystery
							</div>
						</div>
						<div className='subtitleText5 grow pointer w-40'>
						<div className={classNames('pb1',{
											'selectedText': this.state.genres.has('Fantasy')
										})}
										onClick = {() => this.setState(({ genres }) => ({
											genres: new Set(genres).add('Fantasy')
										}))}>
							Fantasy
						</div>
						</div>
				</div>
				<div className='w-100'>
					<div className='grow pointer w-40 center Text4 tc bottomOcc'>
						<div className={classNames('pb1',{
										'selectedText': this.state.genres.has('I dont have preference')
									})}
									onClick = {() => this.setState({
										genres: new Set().add('I dont have preference')
									})}>
							I don't have preference
						</div>
					</div>
				</div>
					<div className=''>
						<div className='center2'>
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
									onClick={() => {this.setState({genres : new Set()})}}
								>
									Clear
								</button>
							</a>
							{
								this.state.genres.size != 0 ?
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
							:
							<button className='btn grow pointer tc none'>
									Next
							</button>
							}
						</div>
					</div>
				</div>
			</div>
		) : this.state.questions == 5 ? (
			<div className='vertical'>
				<div className='dib br2 pa3 ma3 shadow-5 cardComponent1'>
					<div className='subtitleText2'>
						How old would you like the movie to be?
					</div>
					<div className='subtitleText3 topOcc grow pointer'>
					<div className={classNames('pa2',{
										'selectedText': this.state.year == 0
									})}
									onClick={() => this.setState({ year : 0})}>
						Doesn't matter
					</div>
				</div>
				<div className='subtitleText3 grow pointer'>
					<div className={classNames('pa2',{
										'selectedText': this.state.year == new Date().getFullYear() - 5
									})}
									onClick={() => this.setState({ year : new Date().getFullYear() - 5})}>
						Published in the last 5 years
					</div>
				</div>
				<div className='subtitleText3 grow pointer'>
					<div className={classNames('pa2',{
										'selectedText': this.state.year == new Date().getFullYear() - 10
									})}
									onClick={() => this.setState({ year : new Date().getFullYear() - 10})}>
						Published in the last 10 years
					</div>
				</div>
				<div className='subtitleText3 bottomOcc grow pointer'>
					<div className={classNames('pa2',{
										'selectedText': this.state.year == new Date().getFullYear() - 20
									})}
									onClick={() => this.setState({year : new Date().getFullYear() - 20})}>
						Published in the last 20 years
					</div>
				</div>
					<div className='pb3'>
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
							{
								this.state.year != new Date().getFullYear() ?
								<a href='#'>
								<button
									className='btn grow pointer tc'
									onClick={() => {this.setState({ questions: 6 })}}
								>
									Next
								</button>
							</a>
							:
							<button className='btn grow pointer tc none'>
									Next
							</button>
							}
						</div>
					</div>
				</div>
			</div>
		) : this.state.questions == 6 ? (
			<div className='vertical'>
				<div className='dib br2 pa3 ma3 shadow-5 cardComponent1'>
					<div className='subtitleText2'>
						How long would you like the movie to be?
					</div>
					<div className='subtitleText3 topOcc grow pointer'>
					<div className={classNames('pa2',{
										'selectedText': this.state.runtime == 300
									})}
									onClick={() => this.setState({ runtime : 300})}>
						Doesn't matter
					</div>
				</div>
				<div className='subtitleText3 grow pointer'>
					<div className={classNames('pa2',{
										'selectedText': this.state.runtime == 180
									})}
									onClick={() => this.setState({ runtime : 180})}>
						Less than 3 hours
					</div>
				</div>
				<div className='subtitleText3 grow pointer'>
					<div className={classNames('pa2',{
										'selectedText': this.state.runtime == 120
									})}
									onClick={() => this.setState({ runtime : 120})}>
						Less than 2 hours
					</div>
				</div>
				<div className='subtitleText3 bottomOcc grow pointer'>
					<div className={classNames('pa2',{
										'selectedText': this.state.runtime == 90
									})}
									onClick={() => this.setState({ runtime : 90})}>
						Less than 1 hour and 30 minutes
					</div>
				</div>
					<div className='pb3'>
						<div className='center'>
							<a href='#'>
								<button
									className='btn grow pointer tc'
									onClick={() => {
										this.setState({ questions: 5 })
									}}>
									Previous
								</button>
							</a>
							{
								this.state.year != new Date().getFullYear() ?
								<a href='#'>
								<button
									className='btn grow pointer tc'
									onClick={this.getRecommendations}
								>
									Results
								</button>
							</a>
							:
							<button className='btn grow pointer tc none'>
									Next
							</button>
							}
						</div>
					</div>
				</div>
			</div>
		) :
		<div className='vertical'>
				<div className='cardComponent112'>
					<div className='cardComponent11 center'>
						<div className='titleText2 '>Recommended for you:</div>
					</div>
				</div>
				<Movies movies = {this.state.movies} signedIn = {this.props.signedIn} />
		</div>
	}
}

export default Picker
