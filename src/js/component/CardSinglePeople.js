import React, { useState, useContext } from 'react'
import { Context } from '../store/appContext';
import Proptypes from 'prop-types'

export const CardSinglePeople = (props) =>{
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
        <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{`Hair Color: ${props.hair_color} -Skin Color: ${props.skin_color}`}</p>
            <p>{`-Eye Color: ${props.eye_color} -Birth Year: ${props.birth_year}`}</p>
            <i style={{color: "red", position:"relative", marginLeft:"70px", fontSize:"40px"}} onClick={()=>{actions.addFavoriteElement(props.name); /* setIsFavorite(!isFavorite)*/}} 
            className={`fas ${(isFavorite(props.name)) ? "fa-heart" : "fa-heart-circle-plus"}`}></i>
        </div>
    </div>
    )
}

CardSinglePeople.proptypes ={
    hair_color: Proptypes.string,
	skin_color: Proptypes.string,
	eye_color: Proptypes.string,
	birth_year: Proptypes.string,
	gender: Proptypes.string,
    uid: Proptypes.string,
    name: Proptypes.string
}