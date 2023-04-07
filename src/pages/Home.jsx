import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<section className="home-page">
			<div className="home-info">
				<h2>
					You got the travel plans, we got the travel vans.
				</h2>
				<p>
					Add adventure to your life by joining the #vanlife
					movement. Rent the perfect van to make your
					perfect road trip.
				</p>
				<Link to="vans" className="link-btn home-cta">
					Find Your Van
				</Link>
			</div>
		</section>
	);
};

export default Home;
