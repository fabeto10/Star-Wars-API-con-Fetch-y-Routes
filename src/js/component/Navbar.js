import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="logo" src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-logo-tm.jpg"/>
			</Link>
			<div className="ml-auto mr-3">
				<div className="dropdown mr-3">
				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Favorite Adds
				</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favorites.map((fav, index)=>{return(<div className="dropdown-item" key={index}>{fav+" "}<i className="fa fa-trash" onClick={()=>actions.deleteFavoriteElement(fav)} aria-hidden="true"></i></div>)})}
					</div>
				</div>
			</div>
		</nav>
	);
};
