import React from 'react'
import Proptypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
export const CardPeople = (props) => {
    let {userId} = useParams()
    return(
    <div className='container-fluid d-flex'>
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" img={`https://starwars-visualguide.com/assets/img/characters/${userId}.jpg`} alt="Card image cap"/>
            <div className="card-body">
                {props.name && <h5 className="card-title">{props.name}</h5>}
                {props.description && <p className="card-text">{props.gender}</p>}
                <a href="#" className="btn btn-primary">{"DATA BANK"}</a>{" "}<Link to={`/people/${userId}`}></Link><i style={{color: "red"}} className="fas fa-heart"></i>
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