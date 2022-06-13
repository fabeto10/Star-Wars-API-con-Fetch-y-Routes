import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="logo" src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-logo-tm.jpg"/>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<div style={{marginRight: "20px"}} className="dropdown">
							<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							{"Favorites"}
							</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton"/>
					</div>		
				</Link>
			</div>
		</nav>
	);
};
