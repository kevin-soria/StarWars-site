import React from "react";

//include images into your bundle

//Styles
const jumboStyle = {
	overflow: "hidden",
	background: "none",
	display: "inline-block",
	backgroundSize: "100%",
	width: "100%"
};

const starWars = {
	marginTop: "5px",
	display: "flex",
	justifyContent: "center",
	height: "300px",
	perspective: "800px",
	color: "#feda4a",
	fontFamily: "'Pathway Gothic One', sans-serif",
	fontSize: "300%",
	fontWeight: "600",
	letterSpacing: "6px",
	lineHeight: "150%",
	textAlign: "center"
};

const crawl = {
	position: "relative",
	top: "-100px",
	transformOrigin: "50% 100%",
	animation: "crawl 120s linear"
};

//create your first component
export function Jumbotron() {
	return (
		<div className="container">
			<audio preload="auto" autoPlay>
				<source
					src="src/music/Star_Wars_original_opening_crawl_1977.mp3"
					type="audio/mpeg"
				/>
			</audio>
			<header className="jumbotron my-4" style={jumboStyle}>
				<section className="star-wars" style={starWars}>
					<div className="crawl" style={crawl}>
						<div className="title">
							<p>Episode IV</p>
							<h1>A New Hope</h1>
						</div>

						<p>
							It is a period of civil war. Rebel spaceships,
							striking from a hidden base, have won their first
							victory against the evil Galactic Empire.
						</p>
						<p>
							During the battle, Rebel spies managed to steal
							secret plans to the Empire’s ultimate weapon, the
							DEATH STAR, an armored space station with enough
							power to destroy an entire planet.
						</p>
						<p>
							Pursued by the Empire’s sinister agents, Princess
							Leia races home aboard her starship, custodian of
							the stolen plans that can save her people and
							restore freedom to the galaxy…
						</p>
					</div>
				</section>
			</header>
		</div>
	);
}
