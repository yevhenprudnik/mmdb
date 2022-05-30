import React from "react";
import ReactStars from './react-stars'
import "./movie.css";
import swal from "sweetalert"
import Swal from 'sweetalert2'
class Card extends React.Component {
    constructor(props) {
		super(props)
		this.state = {
			selectedMovie: "",
            rating: this.props.Rating,
		}
	}
    rateFilm = () => {
            this.props.signedIn 
        ? 
            //console.log("ok")
            fetch('http://localhost:3001/rateFilm', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    movie: this.state.selectedMovie,
                    rate: this.state.rating
                }),
            })
            .then(response => response.json())
			.then(data => {
                data == "ok" ?
                Swal.fire({
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
                :
                swal(
                    'Sign In or Register',
                    'to Rate a movie',
                    'error'
                )
            })
        :
            swal(
                'Sign In or Register',
                'to Rate a movie',
                'error'
            )
    }
    ratingChanged = (newRating) => {
        this.setState({rating: newRating})
    }
    // componentDidMount(){
    //     this.setState({rating: this.props.IMDBraiting})
    // }
    render() {
        const {title, subtitle, year, genre, topCast, synopsis, image, trailer} = this.props
        return(
            <div className="dib br3 pa3 ma3 grow shadow-5 cardComponent" onMouseEnter={() => this.setState({selectedMovie : title})}>
                <div className="container">
                    <div className = "pr4 photo">
                        <img className = "br4" src={image}/>
                    </div>
                    <div className="w-70 pt2">
                        <div className = "pb4">
                            <div className = "titleText">{title}</div>
                            <div className = "subtitleText">{subtitle}</div>
                            <div className = "rateContainer">
                                <div className = "pr2">
                                    <ReactStars
                                    count={10}
                                    onChange={this.ratingChanged}
                                    size={2}
                                    color2={'#ffd700'}
                                    value ={this.state.rating}
                                    />
                                </div>
                                <div className = "Rate pointer grow" onClick={this.rateFilm}>
                                    <button className="btn-grad2 pointer">Rate</button>
                                </div>
                            </div>
                        </div>
                        <div className="text3 dsText">
                            <div className="pb2">
                                <div>{genre}</div>
                            </div>
                            <div className="mb2">
                                <div>{year}</div>
                            </div>
                            <div className="pb2 text2">
                                <div>{synopsis}</div>
                            </div>
                            <div className="dsText">
                                <div>{topCast}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pl4 pbb">
                    <a href={trailer} target="_blank"><button className="btn-grad pointer grow tc dsText">Trailer</button></a>
                </div>
            </div>
        );
    }
}
export default Card;