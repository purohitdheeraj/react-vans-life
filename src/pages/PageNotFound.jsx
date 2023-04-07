import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<section className="not-found-page">
			<h2>
				Sorry! the page you were looking for was not found
			</h2>

			<Link to="/" className="link-btn">
				Return to Home
			</Link>
		</section>
	);
};

export default PageNotFound;
