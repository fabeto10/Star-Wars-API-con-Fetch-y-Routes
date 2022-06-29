import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { CardSinglePeople } from "../component/CardSinglePeople";
import { useParams } from "react-router-dom";
export const SinglePeople = () => {
    const {store, actions} = useContext(Context)
    const characterId = useParams()
    useEffect(()=>{
        console.log(characterId.uid)
        actions.getSinglePeople(characterId.uid)
    },[])
    return(
            <>
                {
                    store.singlePerson && <CardSinglePeople       
                                    key = {store.singlePerson.properties.uid}
                                    uid={characterId.uid}  
                                    hair_color={store.singlePerson.properties.hair_color} 
                                    skin_color={store.singlePerson.properties.skin_color} 
                                    gender={store.singlePerson.properties.gender} 
                                    name={store.singlePerson.properties.name} 
                                    eye_color={store.singlePerson.properties.eye_color} 
                                    birth_year={store.singlePerson.properties.birth_year} 
                                    />
                                }
            </>
            )
}
