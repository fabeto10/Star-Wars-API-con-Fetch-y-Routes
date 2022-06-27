import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { CardSinglePeople } from "../component/CardSinglePeople";
export const SinglePeople = () => {
    const {store, actions} = useContext(Context)
    useEffect(()=>{
        actions.getSinglePeople()
    },[])
    return(
                <CardSinglePeople       
                                key = {store.uid}
                                uid={store.uid}  
                                hair_color={store.hair_color} 
                                skin_color={store.skin_color} 
                                gender={store.gender} 
                                name={store.name} 
                                eye_color={store.eye_color} 
                                birth_year={store.birth_year} 
                                />
            )   
}
