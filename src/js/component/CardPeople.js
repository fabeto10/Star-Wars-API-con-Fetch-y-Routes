import React from 'react'
import Proptypes from 'prop-types'
import { Link } from "react-router-dom";
export const CardPeople = (props) => {
    return(
    <div className='container-fluid d-flex CardPeople'>
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} alt="Card image cap"/>
            <div className="card-body">
                {props.name && <h5 className="card-title">{props.name}</h5>}
                {props.description && <p className="card-text">{props.gender}</p>}
                <Link to={`/people/${props.uid}`} className="btn btn-primary">{"DATA BANK"}</Link>{" "}<i style={{color: "red"}} className="fas fa-heart"></i>
            </div>
        </div>
    </div>    
    )
}

CardPeople.proptypes = {
    name: Proptypes.string,
    gender: Proptypes.string,
    uid: Proptypes.string
}