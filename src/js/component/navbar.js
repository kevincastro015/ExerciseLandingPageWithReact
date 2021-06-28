import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<span>
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
			</span>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-item nav-link active" href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-item nav-link" href="#">
						About
					</a>
					<a className="nav-item nav-link" href="#">
						Services
					</a>
					<a className="nav-item nav-link disabled" href="#">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
