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
	height: "450px",
	perspective: "800px",
	color: "#feda4a",
	fontFamily: "'Pathway Gothic One', sans-serif",
	fontSize: "300%",
	fontWeight: "500",
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

const image = {
	starImage:
		"https://lh3.googleusercontent.com/proxy/B0uUgcRimAFesSeqmVghxtLlbavurni_rPP33uQfCBK72FWzHtSe-_ws7G9F2d3wT78DacCfJYfZ4nwzhAGa6syPzpmD3mvHkWqGzKl-GGlOxUIjDA7qAHE"
};

const newHope = {
	episode: "Episode IV",
	title: "A NEW HOPE",
	para1:
		"It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.",
	para2:
		"During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.",
	para3:
		"Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…"
};

const empire = {
	episode: "Episode V",
	title: "THE EMPIRE STRIKES BACK",
	para1:
		"It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.",
	para2:
		"Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.",
	para3:
		"The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space...."
};

const returnJedi = {
	episode: "Episode VI",
	title: "THE RETURN OF THE JEDI",
	para1:
		"Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt.",
	para2:
		"Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star.",
	para3:
		"When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy…"
};

//create your first component
export function Jumbotron() {
	return (
		<div className="container">
			<header className="jumbotron my-4" style={jumboStyle}>
				<section className="star-wars" style={starWars}>
					<div className="crawl" style={crawl}>
						<div className="title">
							<br />
							<br />
							<img src={image.starImage} />
						</div>
						{/* Episode IV */}
						<p>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							{newHope.episode}
						</p>
						<h1>{newHope.title}</h1>

						<p>{newHope.para1}</p>
						<p>{newHope.para2}</p>
						<p>
							{newHope.para3}
							<br />
							<br />
							<br />
						</p>

						{/* Episode v */}
						<p>{empire.episode}</p>
						<h1>{empire.title}</h1>

						<p>{empire.para1}</p>
						<p>{empire.para2}</p>
						<p>
							{empire.para3}
							<br />
							<br />
							<br />
						</p>

						{/* Episode VI */}
						<p>{returnJedi.episode}</p>
						<h1>{returnJedi.title}</h1>

						<p>{returnJedi.para1}</p>
						<p>{returnJedi.para2}</p>
						<p>{returnJedi.para3}</p>
					</div>
				</section>
			</header>
		</div>
	);
}
