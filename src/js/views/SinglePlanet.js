import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { CardSinglePlanet } from "../component/CardSinglePlanet";
import { useParams } from "react-router-dom";
export const SinglePlanet = () => {
    const {store, actions} = useContext(Context)
    const planetId = useParams()
    useEffect(()=>{
        console.log(planetId.uid)
        actions.getSinglePlanet(planetId.uid)
    },[])
    return(
            <>
                {
                    store.singlePlanet && <CardSinglePlanet       
                                    key = {store.singlePlanet.results.uid}
                                    uid={planetId.uid}  
                                    />
                                }
            </>
            )
}