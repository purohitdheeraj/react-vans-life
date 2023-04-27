import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Host = () => {
	const { userLogout } = useAuth();
	const navigate = useNavigate();

	return (
		<div>
			<button
				onClick={() => {
					// just call this func from context
					// navigate re-direct will be taken care
					userLogout();
				}}
				className="btn"
			>
				logout
			</button>
		</div>
	);
};

export default Host;
