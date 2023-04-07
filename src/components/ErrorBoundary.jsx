import React from "react";
import { useRouteError } from "react-router";

const ErrorBoundary = () => {
	const error = useRouteError();

	return (
		<div className="error-boundary route-error">
			<h3>Error!</h3>
			<p>{error.message}</p>
		</div>
	);
};

export default ErrorBoundary;
