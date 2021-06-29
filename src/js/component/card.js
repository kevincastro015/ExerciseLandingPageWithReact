import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, image, description, goTo, button }) => {
	return (
		<div
			key={title}
			className="card col-sm-2 m-2"
			style={{ width: "18rem" }}>
			<img className="card-img-top" src={image} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				<a href={goTo} className="btn btn-primary">
					{button}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	image: PropTypes.image,
	description: PropTypes.description,
	goTo: PropTypes.goTo,
	button: PropTypes.button
};

export default Card;
