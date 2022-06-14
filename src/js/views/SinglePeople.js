import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { CardSinglePeople } from "../component/CardSinglePeople";
export const SinglePeople = () => {
    const {store, actions} = useContext(Context)
    useEffect(()=>{
        actions.getSinglePeople()
    },[])
    return(
        <CardSinglePeople hair_color={hair_color} skin_color={skin_color} gender={gender} name={name} eye_color={eye_color} birth_year={birth_year} uid={uid} />
    )
}