import React, { useState, useContext } from 'react'
import { Context } from '../store/appContext';
import PropTypes from "prop-types";

export const CardSinglePlanet = (props) =>{
    const {store, actions} = useContext(Context)
    const isFavorite = (fav) => {
        const search = store.favorites.find((x)=> x == fav)
        if(search){
            return true
        } 
        return false
    }
    return(
        <div className="card" style={{width:"400px", margin:"auto"}}>
            <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{`-Rotation Period: ${props.rotation_period} -Orbital Period: ${props.orbital_period}`}</p>
                <p>{`-Diameter: ${props.diameter} -Climate: ${props.climate}`}</p>
                <i style={{color: "red"}} onClick={()=>{actions.addFavoriteElement(props.name); /* setIsFavorite(!isFavorite)*/}} 
                className={`fas ${(isFavorite(props.name)) ? "fa-heart" : "fa-heart-circle-plus"}`}></i>
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