import React from 'react'

export const CardPlanets = () => {
    let {userId} = useParams()
    return(
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" image={`https://starwars-visualguide.com/#/planets/${userId}.jpg`} alt="Card image cap"/>
            <div className="card-body">
                {props.name && <h5 className="card-title">{props.name}</h5>}
                {props.description && <p className="card-text">{props.description}</p>}
                <a href="#" className="btn btn-primary">DATA BANK</a>
            </div>
        </div>
    )
}