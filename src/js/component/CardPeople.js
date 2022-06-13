import React from 'react'
import PropTypes from "prop-types";
import { useParams } from 'react-router-dom';

export const CardPeople =(props) =>{
    let {userId} = useParams()
    return(
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" image={`https://starwars-visualguide.com/assets/img/characters/${userId}.jpg`} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">DATA BANK</a>
            </div>
        </div>
    )
}
