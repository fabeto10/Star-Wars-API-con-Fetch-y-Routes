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
                <div className="d-flex row" >{store.people && store.people.map((item)=>{
                    return(
                        <CardPeople className={"col-3"} key={item.uid} uid={item.uid} name={item.name} gender={item.gender}/>
                    )
                })}
                </div>
            </div>
            <div className="container planets">
                <h1>{'Planets'}</h1>
                <div className="list-group">{store.planets && store.planets.map((item)=>{
                    return(
                        <CardPlanets className={"list-group-item "} key={item.uid} uid={item.uid} terrain={item.terrain} name={item.name}/>
                    )
                })}</div>
            </div>
        </div>
    )
} 