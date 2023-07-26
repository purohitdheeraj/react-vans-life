import React from "react";
import {
	Navigate,
	Outlet,
	useLocation,
} from "react-router";
import { useAuth } from "../context/AuthContext";

const ProtectedLayout = () => {
	const { loginState } = useAuth();
	const location = useLocation();

	if (!loginState) {
		return (
			<Navigate
				to="login"
				replace={true}
				state={{
					message: "login required to access host page",
					from: location,
				}}
			/>
		);
	}

	return <Outlet />;
};

export default ProtectedLayout;
