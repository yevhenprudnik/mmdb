import React from "react";
import swal from 'sweetalert'

const Card = ({title}) => {
    return(
        <div className="tc bg-washed-blue dib br4 pa3 ma3 grow shadow-2">
            <img className = "photo br4" src=""/>
            <div>
                <h2>{title}</h2>
            </div>
        </div>
    );
}
export default Card;