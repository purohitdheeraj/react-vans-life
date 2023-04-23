import React from "react";
import { useRouteError } from "react-router";

const ErrorBoundary = () => {
	const error = useRouteError();

	console.log(error);

	return (
		<div className="error-boundary route-error">
			<h3>Error!</h3>
			<p>{error.message}</p>
			<pre>
				{error.status} - {error.statusText}
			</pre>
		</div>
	);
};

export default ErrorBoundary;
