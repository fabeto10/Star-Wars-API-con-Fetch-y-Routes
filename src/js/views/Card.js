import React, {useContext, useEffect} from "react";
import {CardPeople} from "../component/CardPeople"
import {CardPlanets} from  "../component/CardPlanets"
import { Context } from "../store/appContext";
export const Card = () => {
    const {store, actions} = useContext(Context)
    useEffect(()=>{
        actions.getCharacters()
        actions.getPlanets()
    },[])
    return(
        <div className="cards container-fluid">
            <div className="container people">
                <h1>{'Characters'}</h1>
                <div className="peopleCard">{store.people.map((item)=>{
                    return(
                        <CardPeople key={item.uid} item={item}/>
                    )
                })}</div>
            </div>
            <div className="container planets">
                <h1>{'Planets'}</h1>
                <div className="planetsCard">{store.planets.map((item)=>{
                    return(
                        <CardPlanets key={item.uid} item={item}/>
                    )
                })}</div>
            </div>
        </div>
    )
} 