import React from 'react'
import Proptypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
export const CardPlanets = (props) => {
    let {userId} = useParams()
    return(
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`} alt="Card image cap"/>
            <div className="card-body">
                {props.name && <h5 className="card-title">{props.name}</h5>}
                {props.terrain && <p className="card-text">{props.terrain}</p>}
                <a href="#" className="btn btn-primary">DATA BANK</a>{"  "}<Link to={`/planets/${props.uid}`}><i style={{color: "red"}} className="fas fa-heart"></i></Link>
            </div>
        </div>
    )
}

CardPlanets.proptypes = {
    name: Proptypes.string,
    terrain: Proptypes.string,
    uid: Proptypes.string
}