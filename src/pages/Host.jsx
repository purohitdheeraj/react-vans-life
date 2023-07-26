import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLoaderData } from "react-router";

import { getVans } from "../api";

export const loader = async () => {
	return await getVans();
};

const Host = () => {
	const { userLogout } = useAuth();
	// const navigate = useNavigate();
	const vans = useLoaderData();
	console.log(vans);

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
