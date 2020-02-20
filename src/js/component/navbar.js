import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
// import { url } from "inspector";

//create your first component
let NavStyles = {
	// color: "white",
	url: "https://www.starwars.com/",
	urlText: "text",
	backgroundColor: "rgb(15, 15, 15, .5)",
	margin: "20px",
	height: "100px",
	color: "white"
};

let IconStyles = {
	margin: "2px",
	height: "35px",
	width: "45px",
	color: "white",
	marginTop: "25px"
};

export function Navbar() {
	return (
		<div className="row" style={NavStyles}>
			<div className="col-4">
				<a href="https://techcrunch.com/">
					<i className="fab fa-facebook-square" style={IconStyles}>
						{" "}
					</i>
				</a>
				<a href="https://techcrunch.com/">
					<i className="fab fa-instagram" style={IconStyles}>
						{" "}
					</i>
				</a>
				<a href="https://techcrunch.com/">
					<i className="fab fa-github-square" style={IconStyles}>
						{" "}
					</i>
				</a>
				<a href="https://techcrunch.com/">
					<i className="fab fa-twitter-square" style={IconStyles}></i>
				</a>
			</div>
			<div className="col col1"></div>
			<div className="col col2">
				<ul className="list-group list-group-horizontal">
					<a href="https://www.starwars.com/">
						{" "}
						<li className="list-group-item">Home</li>
					</a>
					<a href="https://www.starwars.com/">
						<li className="list-group-item">Club</li>
					</a>
					<a href="https://www.starwars.com/">
						<li className="list-group-item">Fans</li>
					</a>
					<a href="https://www.starwars.com/">
						<li className="list-group-item">New Release</li>
					</a>
				</ul>
			</div>
		</div>
	);
}
