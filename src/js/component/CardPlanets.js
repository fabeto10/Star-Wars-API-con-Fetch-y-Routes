import React, { useState, useContext } from 'react'
import Proptypes from 'prop-types'
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

export const CardPlanets = (props) => {
    const {store, actions} = useContext(Context)
    // const [isFavorite, setIsFavorite] = useState(false)
    const isFavorite = (fav) => {
        const search = store.favorites.find((x)=> x == fav)
        if(search){
            return true
        } 
        return false
    }
    return(
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`} alt="Card image cap"/>
            <div className="card-body">
                {props.name && <h5 className="card-title">{props.name}</h5>}
                {props.terrain && <p className="card-text">{props.terrain}</p>}
                <Link to={`/planets/${props.uid}`} className="btn btn-primary">{"DATA BANK"}</Link>{"  "}
                <i style={{color: "red", position:"relative", marginLeft:"70px", fontSize:"40px"}} onClick={()=>{actions.addFavoriteElement(props.name); /* setIsFavorite(!isFavorite)*/}}
                className={`fas ${(isFavorite(props.name)) ? "fa-heart" : "fa-heart-circle-plus"}`}></i>
            </div>
        </div>
    )
}

CardPlanets.proptypes = {
    name: Proptypes.string,
    terrain: Proptypes.string,
    uid: Proptypes.string
}