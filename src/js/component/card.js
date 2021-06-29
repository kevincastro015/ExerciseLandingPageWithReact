import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, image, description, goTo, button }) => {
	return (
		<div key={title} className="col-3 p-3">
			<div className="card" style={{ minWidth: "16rem" }}>
				<img
					className="card-img-top"
					src={image}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					<a href={goTo} className="btn btn-primary">
						{button}
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	description: PropTypes.string,
	goTo: PropTypes.string,
	button: PropTypes.string
};

export default Card;
