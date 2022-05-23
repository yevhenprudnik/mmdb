import React from "react";
import swal from 'sweetalert'
import "./movie.css";
const Card = ({title, subtitle, year, genre, topCast, synopsis, image, trailer}) => {
    return(
        <div className="dib br2 pa3 ma3 grow shadow-5 cardComponent">
            <div className="container">
                <div className = "pr4 w-30">
                    <img className = "br4" src={image}/>
                </div>
                <div className="w-70 pt2">
                    <div className = "pb4">
                        <h2>{title}</h2>
                        <h3>{subtitle}</h3>
                    </div>
                    <div className="text3">
                        <div className="pb3">
                            <h3>{genre}</h3>
                        </div>
                        <div className="mb2">
                            <h3>{year}</h3>
                        </div>
                        <div className="pb2 text2">
                            <h3>{synopsis}</h3>
                        </div>
                        <div className="text">
                            <h3>{topCast}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pl4 pbb">
                <a href={trailer} target="_blank"><button className="w-10 btn-grad pointer tc">Trailer</button></a>
            </div>
        </div>
    );
}
export default Card;