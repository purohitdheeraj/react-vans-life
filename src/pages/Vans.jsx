import React from "react";
import { getVans } from "../api";
import { useFetch } from "../hooks/useFetch";

const Vans = () => {
	const { data: vans, isLoaded, error } = useFetch(getVans);

	console.log(vans);

	if (!isLoaded) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div> Error: {error.message}</div>;
	}

	const vansEl = vans.map((van) => {
		return (
			<div key={van.id} className="van">
				<img src={van.imageUrl} alt={van.name} />

				<div className="van-info">
					<h3>{van.name}</h3>
					<p className="van-price">
						<strong>${van.price}</strong>
						<br />
						/day
					</p>
				</div>

				<p className="van-type">{van.type}</p>
			</div>
		);
	});

	return (
		<section className="vans-page">
			<h2>Explore our van options</h2>
			<main className="vans-container">{vansEl}</main>
		</section>
	);
};

export default Vans;
