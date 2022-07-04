import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import injectContext from "./store/appContext";
import { CardSinglePeople } from "./component/CardSinglePeople";
import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";
import { Card } from "./views/Card";
import { SinglePlanet } from "./views/SinglePlanet";
import { SinglePeople } from "./views/SinglePeople";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Card/>} />
						<Route path="/people/:uid" element={<SinglePeople />} />
						<Route path="/planets/:uid" element={<SinglePlanet/>}/>
						<Route path="*" element={<h1>Not found!</h1>}/>
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
