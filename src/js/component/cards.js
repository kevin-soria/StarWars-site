import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Cards() {
	return (
		<div className="row text-center">
			<div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
					<img
						className="card-img-top lead-hover-image aligncenter"
						src="https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg"
						alt="image CSS effects and hover tricks"
					/>
					<div className="card-body">
						<h4 className="card-title">A New Hope - 1977</h4>
						<p className="card-text">
							Luke Skywalker begins a journey that will change the
							galaxy as he leaves his home planet, meets lifelong
							friends (Han Solo, Chewbacca, R2D2, C3PO, etc) and
							family (Leia Organa), battles the evil Empire and
							learns the ways of the Force. He also destroys the
							Death Star, thwarting the evil plans of the Empire.
						</p>
					</div>
					<div className="card-footer">
						<a
							href="https://en.wikipedia.org/wiki/Star_Wars_(film)"
							className="btn btn-primary">
							EXPERIENCE EPISODE IV
						</a>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
					<img
						className="card-img-top lead-hover-image aligncenter"
						src="https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg"
						alt=""
					/>
					<div className="card-body">
						<h4 className="card-title">
							The Empire Strikes Back - 1980
						</h4>
						<p className="card-text">
							Three years after the destruction of the Death Star,
							the Empire has regrouped – with Darth Vader leading
							the hunt for Luke Skywalker. Luke meets a new
							mentor, Yoda, and discovers more about his
							connection to the Force, while Han Solo and Leia
							Organa are double-crossed by Solo’s friend Lando
							Calrissian. Luke helps rescue them, though Solo is
							captured, and Luke finds out that Vader is his
							father.
						</p>
					</div>
					<div className="card-footer">
						<a
							href="https://en.wikipedia.org/wiki/The_Empire_Strikes_Back"
							className="btn btn-primary">
							EXPERIENCE EPISODE V
						</a>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
					<img
						className="card-img-top lead-hover-image aligncenter"
						src="https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg"
						alt=""
					/>
					<div className="card-body">
						<h4 className="card-title">The Jedi Last Jedi- 2017</h4>
						<p className="card-text">
							With the destruction of the Republic, the evil First
							Order reigns. Supreme Leader Snoke, the latest Sith
							Lord, looks to crush what’s left of the Resistance.
							But hope survives: Rey has found Luke Skywalker, a
							now legendary Jedi Master who can change the tide of
							war.
						</p>
					</div>
					<div className="card-footer">
						<a
							href="https://en.wikipedia.org/wiki/Star_Wars:_The_Last_Jedi"
							className="btn btn-primary">
							EXPERIENCE EPISODE VIII
						</a>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
					<img
						className="card-img-top lead-hover-image aligncenter"
						src="https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg"
						alt=""
					/>
					<div className="card-body">
						<h4 className="card-title">
							The Return Of the Jedi - 1983
						</h4>
						<p className="card-text">
							Luke Skywalker heads a mission to rescue Han Solo
							from the clutches of gangster Jabba the Hutt, and
							faces Darth Vader one last time. Meanwhile, the
							Rebellion pushes to destroy a second Death Star,
							with a little help from alien teddy bears called the
							Ewoks.
						</p>
					</div>
					<div className="card-footer">
						<a
							href="https://en.wikipedia.org/wiki/Return_of_the_Jedi"
							className="btn btn-primary">
							EXPERIENCE EPISODE VI
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
