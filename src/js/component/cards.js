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
						className="card-img-top"
						src="https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg"
						alt=""
					/>
					<div className="card-body">
						<h4 className="card-title">Star Wars - 1977</h4>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Sapiente esse necessitatibus neque.
						</p>
					</div>
					<div className="card-footer">
						<a
							href="https://en.wikipedia.org/wiki/Star_Wars_(film)"
							className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
					<img
						className="card-img-top"
						src="https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg"
						alt=""
					/>
					<div className="card-body">
						<h4 className="card-title">
							The Empire Strikes Back - 1980
						</h4>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Explicabo magni sapiente, tempore debitis
							beatae culpa natus architecto.
						</p>
					</div>
					<div className="card-footer">
						<a
							href="https://en.wikipedia.org/wiki/The_Empire_Strikes_Back"
							className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
					<img
						className="card-img-top"
						src="https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg"
						alt=""
					/>
					<div className="card-body">
						<h4 className="card-title">The Jedi Last Jedi- 2017</h4>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Sapiente esse necessitatibus neque.
						</p>
					</div>
					<div className="card-footer">
						<a
							href="https://en.wikipedia.org/wiki/Star_Wars:_The_Last_Jedi"
							className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
					<img
						className="card-img-top"
						src="https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg"
						alt=""
					/>
					<div className="card-body">
						<h4 className="card-title">
							The Return Of the Jedi - 1983
						</h4>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Explicabo magni sapiente, tempore debitis
							beatae culpa natus architecto.
						</p>
					</div>
					<div className="card-footer">
						<a
							href="https://en.wikipedia.org/wiki/Return_of_the_Jedi"
							className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
