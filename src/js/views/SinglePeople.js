import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom'
import { CardSinglePeople } from "../component/CardSinglePeople";
export const SinglePeople = () => {
    let iD = useParams()
    const {store, actions} = useContext(Context)
    useEffect(()=>{
        actions.getSinglePeople(uid)
    },[])
    return(
        <div>
            <CardSinglePeople       uid={store.uid}  
                                    hair_color={store.hair_color} 
                                    skin_color={store.skin_color} 
                                    gender={store.gender} 
                                    name={store.name} 
                                    eye_color={store.eye_color} 
                                    birth_year={store.birth_year} 
                                    />
        </div>
    )
        
}