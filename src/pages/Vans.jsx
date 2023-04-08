import React, { useEffect, useRef, useState } from "react";

const Vans = () => {
	const [vans, setVans] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);

	async function getVans() {
		const response = await fetch("/api/vans");
		if (!response.ok) {
			throw Error(
				`${response.statusText} ${response.status}
				`
			);
		}
		const parseResponse = await response.json();
		return parseResponse.vans;
	}

	useEffect(() => {
		let didCancel = false;

		async function loadData() {
			try {
				const response = await getVans();
				if (!didCancel) {
					console.log(response);
					setVans(response);
				}
			} catch (err) {
				if (!didCancel) {
					setError(err);
				}
			} finally {
				if (!didCancel) {
					setIsLoaded(true);
				}
			}
		}

		loadData();

		return () => {
			didCancel = true;
		};
	}, []);

	if (!isLoaded) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div> Error: {error.message}</div>;
	}

	return <div>Vans</div>;
};

export default Vans;
