import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../api";
import { useFetch } from "../hooks/useFetch";

const Vans = () => {
const { data: vans, isLoaded, error } = useFetch(getVans);
const [searchParams, setSearchParams] = useSearchParams();

    const typeFilter = searchParams.get("type");

    if (!isLoaded) {
    	return <div>Loading...</div>;
    }

    if (error) {
    	return <div> Error: {error.message}</div>;
    }

    const displayedItems = typeFilter
    	? vans.filter(
    			(van) => van.type.toLowerCase() === typeFilter
    	  )
    	: vans;

    const vansEl = displayedItems.map((van) => {
    	return (
    		<div key={van.id} className="van">
    			<Link to={van.id}>
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

    			<p className="van-type">{van.type}</p>
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

    // const getNewSearchParams = (key, value) => {
    // 	const sp = new URLSearchParams(searchParams);
    // 	if (value === null) {
    // 		sp.delete(key);
    // 	} else {
    // 		sp.set(key, value);
    // 	}
    // 	return `?${sp.toString()}`;
    // };

    return (
    	<section className="vans-page">
    		<h2>Explore our van options</h2>

    		<button
    			onClick={() => handleTypeFilter("type", "simple")}
    		>
    			Simple
    		</button>

    		<button
    			onClick={() => handleTypeFilter("type", "rugged")}
    		>
    			Rugged
    		</button>

    		<button
    			onClick={() => handleTypeFilter("type", "luxury")}
    		>
    			Luxury
    		</button>

    		<button
    			onClick={() => handleTypeFilter("type", null)}
    		>
    			Clear All
    		</button>

    		{/* 1st way */}
    		{/* hardcoded way */}
    		{/* <Link to="?type=simple">Simple</Link>
    		<Link to="?type=rugged">Rugged</Link>
    		<Link to="?type=luxury">Luxury</Link>
    		<Link to=".">Clear All</Link> */}

    		{/* 2nd way */}
    		{/*

    	This getNewSP function solves the problem
    	of one url at a time, means we can manage multiple sp

    		<Link to={getNewSearchParams("type", "simple")}>
    			Simple
    		</Link>
    		<Link to={getNewSearchParams("type", "rugged")}>
    			Rugged
    		</Link>
    		<Link to={getNewSearchParams("type", "luxury")}>
    			Luxury
    		</Link>
    		<Link to={getNewSearchParams("type", null)}>
    			Clear All
    		</Link> */}

    		<main className="vans-container">{vansEl}</main>
    	</section>
    );

};

export default Vans;
