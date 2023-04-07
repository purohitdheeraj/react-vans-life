import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<section className="404-page">
			<h2>
				Sorry! the page you were looking for was not found
			</h2>
			<span>
				<strong>Back to </strong>
				<Link to="/">Home</Link>
			</span>
		</section>
	);
};

export default PageNotFound;
