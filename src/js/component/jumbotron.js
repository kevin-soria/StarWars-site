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
							<br />
							<br />
							<br />
							<br />
							<br />
							<img src="https://lh3.googleusercontent.com/proxy/B0uUgcRimAFesSeqmVghxtLlbavurni_rPP33uQfCBK72FWzHtSe-_ws7G9F2d3wT78DacCfJYfZ4nwzhAGa6syPzpmD3mvHkWqGzKl-GGlOxUIjDA7qAHE" />
						</div>
						{/* Episode 4 */}
						<p>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							Episode IV
						</p>
						<h1>A NEW HOPE</h1>

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
							<br />
							<br />
							<br />
						</p>

						{/* Episode v */}
						<p>Episode V</p>
						<h1>THE EMPIRE STRIKES BACK</h1>

						<p>
							It is a dark time for the Rebellion. Although the
							Death Star has been destroyed, Imperial troops have
							driven the Rebel forces from their hidden base and
							pursued them across the galaxy.
						</p>
						<p>
							Evading the dreaded Imperial Starfleet, a group of
							freedom fighters led by Luke Skywalker has
							established a new secret base on the remote ice
							world of Hoth.
						</p>
						<p>
							The evil lord Darth Vader, obsessed with finding
							young Skywalker, has dispatched thousands of remote
							probes into the far reaches of space....
							<br />
							<br />
							<br />
						</p>

						<p>Episode VI</p>
						<h1>THE RETURN OF THE JEDI</h1>

						<p>
							Luke Skywalker has returned to his home planet of
							Tatooine in an attempt to rescue his friend Han Solo
							from the clutches of the vile gangster Jabba the
							Hutt.
						</p>
						<p>
							Little does Luke know that the GALACTIC EMPIRE has
							secretly begun construction on a new armored space
							station even more powerful than the first dreaded
							Death Star.
						</p>
						<p>
							When completed, this ultimate weapon will spell
							certain doom for the small band of rebels struggling
							to restore freedom to the galaxy…
							<br />
							<br />
							<br />
						</p>

						<p>Episode I</p>
						<h1>THE PHANTOM MENACE</h1>

						<p>
							Turmoil has engulfed the Galactic Republic. The
							taxation of trade routes to outlying star systems is
							in dispute.
						</p>
						<p>
							Hoping to resolve the matter with a blockade of
							deadly battleships, the greedy Trade Federation has
							stopped all shipping to the small planet of Naboo.
						</p>
						<p>
							While the congress of the Republic endlessly debates
							this alarming chain of events, the Supreme
							Chancellor has secretly dispatched two Jedi Knights,
							the guardians of peace and justice in the galaxy, to
							settle the conflict….
							<br />
							<br />
							<br />
						</p>

						<p>Episode II</p>
						<h1>ATTACK OF THE CLONES</h1>

						<p>
							There is unrest in the Galactic Senate. Several
							thousand solar systems have declared their
							intentions to leave the Republic.
						</p>
						<p>
							This separatist movement, under the leadership of
							the mysterious Count Dooku, has made it difficult
							for the limited number of Jedi Knights to maintain
							peace and order in the galaxy.
						</p>
						<p>
							Senator Amidala, the former Queen of Naboo, is
							returning to the Galactic Senate to vote on the
							critical issue of creating an ARMY OF THE REPUBLIC
							to assist the overwhelmed Jedi....
							<br />
							<br />
							<br />
						</p>

						<p>Episode III</p>
						<h1>REVENGE OF THE SITH</h1>

						<p>
							War! The Republic is crumbling under attacks by the
							ruthless Sith Lord, Count Dooku. There are heroes on
							both sides. Evil is everywhere.
						</p>
						<p>
							In a stunning move, the fiendish droid leader,
							General Grievous, has swept into the Republic
							capital and kidnapped Chancellor Palpatine, leader
							of the Galactic Senate. As the Separatist Droid Army
							attempts to flee the besieged capital with their
							valuable hostage, two Jedi Knights lead a desperate
							mission to rescue the captive Chancellor....
							<br />
							<br />
							<br />
						</p>
					</div>
				</section>
			</header>
		</div>
	);
}
