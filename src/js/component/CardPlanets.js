import React from 'react'
import Proptypes from 'prop-types'
import { Link } from "react-router-dom";
export const CardPlanets = (props) => {
    return(
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`} alt="Card image cap"/>
            <div className="card-body">
                {props.name && <h5 className="card-title">{props.name}</h5>}
                {props.terrain && <p className="card-text">{props.terrain}</p>}
                <Link to={`/planets/${props.uid}`} className="btn btn-primary">{"DATA BANK"}</Link>{" "}<i style={{color: "red"}} className="fas fa-heart"></i>
            </div>
        </div>
    )
}

CardPlanets.proptypes = {
    name: Proptypes.string,
    terrain: Proptypes.string,
    uid: Proptypes.string
}