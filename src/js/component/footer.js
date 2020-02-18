import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
// export function Footer() {
// 	return (
// 		<footer className="py-5 bg-dark">
// 			<div className="container">
// 				<p className="m-0 text-center text-white">
// 					Copyright © Your Website 2019
// 				</p>
// 			</div>
// 		</footer>
// 	);
// }

export function Footer() {
	return (
		<div>
			<footer className="footer-distributed">
				<div className="footer-left ">
					<h3>
						Star
						<span>Wars</span>
					</h3>
					<p className="footer-links">
						<a href="#">Home</a> · <a href="#">Blog</a> ·
						<a href="#">Heroes</a> · <a href="#">New Release</a>
					</p>
					<p className="footer-company-name">
						Rey develops her newly discovered abilities with the
						guidance of Luke Skywalker
					</p>
					<div className="footer-icons">
						<a href="#">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="#">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="#">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="#">
							<i className="fab fa-github"></i>
						</a>
					</div>
				</div>
				<div className="footer-right">
					<p>Contact Us</p>
					<form action="#" method="post">
						<input type="text" name="email" placeholder="Email" />
						<textarea
							name="message"
							placeholder="Message"
							defaultValue={""}
						/>
						<button>Send</button>
					</form>
				</div>
			</footer>
		</div>
	);
}
