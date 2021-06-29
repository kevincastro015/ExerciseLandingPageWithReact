import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import { propTypes } from "prop-types";
// import { array } from "./data.js";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	let array = [
		{
			title: "Title for card 1",
			description: "Sentence for card 1",
			image: "url for card 1",
			goTo: ""
		},
		{
			title: "Title for card 2",
			description: "Sentence for card 2",
			image: "url for card 2",
			goTo: ""
		},
		{
			title: "Title for card 3",
			description: "Sentence for card 3",
			image: "url for card 3",
			goTo: ""
		},
		{
			title: "Title for card 4",
			description: "Sentence for card 4",
			image: "url for card 4",
			goTo: ""
		}
	];

	return (
		<div className="text-center mt-5">
			<Navbar />
			<div className="container-fluid">
				<Jumbotron />
				<div className="row">
					{array.map(element => {
						<Card
							key={element.title}
							image={element.image}
							title={element.title}
							description={element.description}
							goTo={element.goTo}
							button={element.button}
						/>;
					})}
				</div>
			</div>
		</div>
	);
}
