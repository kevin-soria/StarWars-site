import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Jumbotron() {
	return (
		<div className="container">
			<header className="jumbotron my-4">
				<h1 className="display-3">A Warm Welcome!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt
					odit vero aliquid similique quaerat nam nobis illo
					aspernatur vitae fugiat numquam repellat.
				</p>
				<a href="#" className="btn btn-primary btn-lg">
					Call to action!
				</a>
			</header>
		</div>
	);
}
