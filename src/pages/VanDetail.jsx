import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getVans } from "../api";
import { FaArrowLeft } from "react-icons/fa";

const VanDetail = () => {
	const params = useParams();

	const {
		data: van,
		isLoaded,
		error,
	} = useFetch(getVans, params.id);

	if (!isLoaded) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<section className="van-detail-page">
			<div key={van.id} className="van">
				<Link
					to=".."
					relative="path"
					className="back-vans-link styled-link"
				>
					<FaArrowLeft className="arrow-left" />
					Back To Vans
				</Link>

				<img src={van.imageUrl} alt={van.name} />

				<p className="van-type">{van.type}</p>

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
