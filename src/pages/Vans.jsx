import React from "react";
import {
	Link,
	useLoaderData,
	useSearchParams,
} from "react-router-dom";
import { getVans } from "../api";

export async function loader() {
	return await getVans();
}

const Vans = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const vans = useLoaderData();

	const typeFilter = searchParams.get("type");

	const displayedItems = typeFilter
		? vans.filter(
				(van) => van.type.toLowerCase() === typeFilter
		  )
		: vans;

	const vansEl = displayedItems.map((van) => {
		return (
			<div key={van.id} className="van">
				<Link
					to={van.id}
					state={{
						search: `?${searchParams.toString()}`,
						type: typeFilter,
					}}
				>
					<img src={van.imageUrl} alt={van.name} />
				</Link>

				<div className="van-info">
					<h3>{van.name}</h3>
					<p className="van-price">
						<strong>${van.price}</strong>
						<br />
						/day
					</p>
				</div>

				<p
					className={`van-type filter-${van.type} selected`}
				>
					{" "}
					{van.type}
				</p>
			</div>
		);
	});

	const handleTypeFilter = (key, value) => {
		setSearchParams((prevParams) => {
			if (value === null) {
				prevParams.delete(key);
			} else {
				prevParams.set(key, value);
			}

			return prevParams;
		});
	};

	return (
		<section className="vans-page">
			<h2>Explore our van options</h2>

			<div className="filters">
				<button
					onClick={() => handleTypeFilter("type", "simple")}
					className={`btn filter-simple ${
						typeFilter === "simple" ? "selected" : null
					}`}
				>
					Simple
				</button>

				<button
					onClick={() => handleTypeFilter("type", "rugged")}
					className={`btn filter-rugged ${
						typeFilter === "rugged" ? "selected" : null
					}`}
				>
					Rugged
				</button>

				<button
					onClick={() => handleTypeFilter("type", "luxury")}
					className={`btn filter-luxury ${
						typeFilter === "luxury" ? "selected" : null
					}`}
				>
					Luxury
				</button>

				{typeFilter ? (
					<button
						onClick={() => handleTypeFilter("type", null)}
						className={`btn filter-clear`}
					>
						Clear All
					</button>
				) : null}
			</div>

			<main className="vans-container">{vansEl}</main>
		</section>
	);
};

export default Vans;
