import React from "react";
import {
	Link,
	useLocation,
	useLoaderData,
} from "react-router-dom";
import { getVans } from "../api";
import { FaArrowLeft } from "react-icons/fa";

export const loader = async ({ params }) => {
	return await getVans(params.id);
};

const VanDetail = () => {
	const { state } = useLocation();

	const van = useLoaderData();
	console.log(van);

	const searchParams = state?.search || "";

	const vanType = state?.type || "all";

	return (
		<section className="van-detail-page">
			<div key={van.id} className="van">
				<Link
					to={`..${searchParams}`}
					relative="path"
					className="back-vans-link styled-link"
				>
					<FaArrowLeft className="arrow-left" />
					Back to {vanType} vans
				</Link>

				<img src={van.imageUrl} alt={van.name} />

				<p
					className={`van-type filter-${van.type} selected`}
				>
					{van.type}
				</p>

				<h2>{van.name}</h2>
				<p className="van-price">
					<strong>${van.price}</strong>
					/day
				</p>
				<p>{van.description}</p>
				<button to="/" className="link-btn btn hover-btn">
					Rent this van
				</button>
			</div>
		</section>
	);
};

export default VanDetail;
