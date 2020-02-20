import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const cardBody = {
	backgroundSize: "400px, 200px",
	backgroundImage: "url(https://wallpaperaccess.com/full/353356.jpg)",
	color: "yellow"
};

const movies = [
	{
		text:
			"Three years after the destruction of the Death Star the Empire has regrouped – with Darth Vader leading the hunt for Luke Skywalker. Luke meets a new mentor, Yoda, and discovers more about his connection to the Force, while Han Solo and Leia Organa are double-crossed by Solo’s friend Lando Calrissian. Luke helps rescue them, though Solo is captured, and Luke finds out that Vader is Dad",
		year: 1980,
		title: "The Empire Strikes Back",
		img:
			"https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg",
		buttonlink: "https://en.wikipedia.org/wiki/The_Empire_Strikes_Back",
		buttontext: "EXPERIENCE EPISODE V"
	},

	{
		text:
			"Luke Skywalker begins a journey that will change the galaxy as he leaves his home planet, meets lifelong friends (Han Solo, Chewbacca, R2D2, C3PO, etc) and family (Leia Organa), battles the evil Empire and learns the ways of the Force. He also destroys the Death Star, thwarting the evil plans of the Empire.",
		title: "A New Hope - 1977",
		img:
			"https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg",
		buttonlink: "https://en.wikipedia.org/wiki/Star_Wars_(film)",
		buttontext: "EXPERIENCE EPISODE IV"
	},

	{
		text:
			"With the destruction of the Republic, the evil First Order reigns. Supreme Leader Snoke, the latest Sith Lord, looks to crush what’s left of the Resistance. But hope survives: Rey has found Luke Skywalker, a now legendary Jedi Master who can change the tide of war.",

		year: 2017,
		title: "The Last Jedi",
		img:
			"https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg",
		buttonlink: "https://en.wikipedia.org/wiki/Star_Wars:_The_Last_Jedi",
		buttontext: "EXPERIENCE EPISODE VIII"
	},
	{
		text:
			"Luke Skywalker heads a mission to rescue Han Solo from the clutches of gangster Jabba the Hutt, and faces Darth Vader one last time. Meanwhile, the Rebellion pushes to destroy a second Death Star, with a little help from alien teddy bears called the Ewoks.",
		year: 1983,
		title: "The Return of The Jedi",
		img:
			"https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg",
		buttonlink: "https://en.wikipedia.org/wiki/Return_of_the_Jedi",
		buttontext: "EXPERIENCE EPISODE VI"
	}
];

const mapMovies = movies.map((movie, index) => (
	<div key={index} className="col-lg-3 col-md-6 mb-4">
		<div className="card h-100">
			<img
				className="card-img-top lead-hover-image aligncenter"
				src={movie.img}
				alt="image CSS effects and hover tricks"
			/>
			<div className="card-body" style={cardBody}>
				<h4 className="card-title">
					{movie.title} | {movie.year}
				</h4>
				<p className="card-text">{movie.text}</p>
			</div>
			<div className="card-footer">
				<a href={movie.buttonlink} className="btn btn-primary">
					{movie.buttontext}
				</a>
			</div>
		</div>
	</div>
));

export function Cards() {
	return <div className="row text-center cardrow">{mapMovies}</div>;
}
