import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
let NavStyles = {
	color: "white"
};

export function Navbar() {
	return (
		<nav
			className="navbar navbar-expand-lg bg-dark fixed-top"
			style={NavStyles}>
			<div className="container">
				<a className="navbar-brand" href="#">
					StarWars
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Video
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Star Club
							</a>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}
