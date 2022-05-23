import React from "react";
import swal from 'sweetalert'
import "./movie.css";
const Card = ({title, subtitle, year, genre, topCast, short, image}) => {
    return(
        <div className="dib br2 pa3 ma3 grow shadow-5 cardComponent">
            <div className="container">
                <div className = "image ph4 pt4 pb2">
                    <img className = "photo br4" src={image}/>
                </div>
                <div>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
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