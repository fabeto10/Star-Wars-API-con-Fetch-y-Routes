import React from "react";
import PropTypes from "prop-types";

export const CardSinglePlanet = (props) =>{
    return(
        <div className="card mb-3">
            <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{`-Rotation Period: ${props.rotation_period} -Orbital Period: ${props.orbital_period} -Diameter: ${props.diameter} -Climate: ${props.climate}`}</p>
            </div>
        </div>
    )
}

CardSinglePlanet.proptypes ={
    uid: PropTypes.string,
    rotation_period: PropTypes.string,
	orbital_period: PropTypes.string,
	diameter: PropTypes.string,
	name: PropTypes.string,
	climate: PropTypes.string
}