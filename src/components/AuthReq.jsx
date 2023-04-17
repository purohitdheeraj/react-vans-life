import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthReq = () => {
	const auth = { token: "" };

	if (!auth.token) {
		return (
			<Navigate
				to="login"
				state={{ message: "You must login first" }}
				replace={true}
			/>
		);
	}
	return <Outlet />;
};

export default AuthReq;
