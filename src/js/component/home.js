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
			image:
				"https://d347bo4ltvvnaz.cloudfront.net/images/ScriptureArt_0617_-_Matthew_5_14_ESV_English_157x157.jpg",
			goTo: ""
		},
		{
			title: "Title for card 2",
			description: "Sentence for card 2",
			image:
				"https://imageproxy.youversionapi.com/320x320/https://s3.amazonaws.com/static-youversionapi-com/images/base/44266/1280x1280.jpg",
			goTo: ""
		},
		{
			title: "Title for card 3",
			description: "Sentence for card 3",
			image:
				"https://cdn.shopify.com/s/files/1/2193/5963/articles/Matthew-5-16-GODS-WORD-Translation-Bible_2b7c3659-70eb-46cc-a615-c7918211ef2d_1440x.jpg?v=1552065060",
			goTo: ""
		},
		{
			title: "Title for card 4",
			description: "Sentence for card 4",
			image:
				"https://studentdevos.com/wp-content/uploads/2017/05/God-loves-you-with-his-whole-heart-1.png",
			goTo: ""
		}
	];

	return (
		<div className="text-center">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					{array.map(element => (
						<Card
							key={element.title}
							image={element.image}
							title={element.title}
							description={element.description}
							goTo={element.goTo}
							button={"Anything"}
						/>
					))}
				</div>
			</div>
			<footer className="page-footer font-small footer-dark bg-dark">
				<div className="footer-copyright text-center py-4 text-white">
					© 2021 Copyright:
					<a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
				</div>
			</footer>
		</div>
	);
}
