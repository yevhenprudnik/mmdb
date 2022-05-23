import React from "react";
import swal from 'sweetalert'
import "./movie.css";
const Card = ({title, subtitle, year, genre, topCast, short, image}) => {
    return(
        <div className="dib br2 pa3 ma3 grow shadow-5 cardComponent">
            <div className="container">
                <div className = "ph4 pt4 pb2 w-30">
                    <img className = "br4" src={image}/>
                </div>
                <div className="w-70">
                    <div className = "pb4">
                        <h2>{title}</h2>
                        <h3>{subtitle}</h3>
                    </div>
                    <h3>{genre}</h3>
                    <h4>{year}</h4>
                    <h5>{short}</h5>
                    <h3>{topCast}</h3>
                </div>
            </div>
            <div className="pl4">
                <button className="w-10 btn-grad pointer tc">Trailer</button>
            </div>
        </div>
    );
}
export default Card;