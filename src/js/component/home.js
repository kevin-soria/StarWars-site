import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./footer.js";
import { Cards } from "./cards.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Footer />
			<Cards />
		</>
	);
}
