import React from "react";
import swal from 'sweetalert'
import "./movie.css";
const Card = ({title, subtitle, year, genre, topCast, synopsis, image, trailer}) => {
    return(
        <div className="dib br2 pa3 ma3 grow shadow-5 cardComponent">
            <div className="container">
                <div className = "pr4 photo">
                    <img className = "br4" src={image}/>
                </div>
                <div className="w-70 pt2">
                    <div className = "pb4">
                        <div className = "titleText">{title}</div>
                        <div>{subtitle}</div>
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
                <a href={trailer} target="_blank"><button className="w-10 btn-grad pointer tc dsText">Trailer</button></a>
            </div>
        </div>
    );
}
export default Card;