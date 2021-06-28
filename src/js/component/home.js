import React from "react";
import Navbar from "./navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

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
			title: "Title for card 1",
			description: "Sentence for card 1",
			image: "url for card 1",
			goTo: ""
		},
		{
			title: "Title for card 1",
			description: "Sentence for card 1",
			image: "url for card 1",
			goTo: ""
		},
		{
			title: "Title for card 1",
			description: "Sentence for card 1",
			image: "url for card 1",
			goTo: ""
		}
	];

	return (
		<div className="text-center mt-5">
			<Navbar />
			<h1>A Warm Welcome</h1>
			{array.map(element => {
				return (
					<span
						key={element.title}
						className="card"
						style={{ width: "18rem" }}>
						<img
							className="card-img-top"
							src={element.image}
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">{element.title}</h5>
							<p className="card-text">{element.description}</p>
							<a href="" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</span>
				);
			})}
		</div>
	);
}
