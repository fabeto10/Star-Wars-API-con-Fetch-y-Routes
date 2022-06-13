import React from "react";
import PropTypes from "prop-types";

export const CardSinglePeople = (props) =>{
    <div className="card mb-3">
        <img className="card-img-top" src="..." alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{`Hair Color: ${props.hair_color}-Skin Color: ${props.skin_color}-Eye Color: ${props.eye_color}-Birth Year: ${props.birth_year}`}</p>
        </div>
    </div>
}

CardSinglePeople.proptypes ={
    hair_color: PropTypes.string,
	skin_color: PropTypes.string,
	eye_color: PropTypes.string,
	birth_year: PropTypes.string,
	gender: PropTypes.string
}