import React from "react";
import { Link } from "react-router-dom";
import aboutBanner from "../assets/banner-about.png";

const About = () => {
	return (
		<section className="about-page">
			<div className="banner">
				<img src={aboutBanner} alt="banner" />
			</div>

			<div className="about-info">
				<h2>
					Don’t squeeze in a sedan when you could relax in a
					van.
				</h2>
				<p>
					Our mission is to enliven your road trip with the
					perfect travel van rental. Our vans are re
					certified before each trip to ensure your travel
					plans can go off without a hitch. (Hitch costs
					extra 😉)
				</p>
				<p>
					Our team is full of vanlife enthusiasts who know
					firsthand the magic of touring the world on 4
					wheels.
				</p>
				<article className="cta-wrapper">
					<h3>
						Your destination is waiting. 
            Your van is ready.
					</h3>
					<Link
						to="/vans"
						relative="path"
						className="link-btn"
					>
						Explore our vans
					</Link>
				</article>
			</div>
		</section>
	);
};

export default About;
