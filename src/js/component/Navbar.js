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
			<div className="ml-auto">
				<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Favorite Adds {store.label}
				</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favorites.map((fav, index)=>{return(<a className="dropdown-item" key={index} href="#">{fav}</a>)})}
					</div>
				</div>
			</div>
		</nav>
	);
};
