import React from "react";
import {
	Navigate,
	Outlet,
	useLocation,
} from "react-router-dom";

const AuthReq = () => {
	const auth = { token: "" };

	const currentPath = useLocation();

	console.log(currentPath);

	if (!auth.token) {
		return (
			<Navigate
				to="login"
				state={{ message: "You must login first" }}
			/>
		);
	}
	return <Outlet />;
};

export default AuthReq;
