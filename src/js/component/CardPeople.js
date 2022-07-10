import React, { useState, useContext } from 'react'
import Proptypes from 'prop-types'
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

export const CardPeople = (props) => {
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
    <div className='container-fluid d-flex CardPeople'>
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} alt="Card image cap"/>
            <div className="card-body">
                {props.name && <h5 className="card-title">{props.name}</h5>}
                {props.gender && <p className="card-text">{props.gender}</p>}
                <Link to={`/people/${props.uid}`} className="btn btn-primary">{"DATA BANK"}</Link>{" "}
                <i style={{color: "red"}} onClick={()=>{actions.addFavoriteElement(props.name); /* setIsFavorite(!isFavorite)*/}} 
                className={`fas ${(isFavorite(props.name)) ? "fa-heart" : "fa-heart-circle-plus"}`}></i>
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