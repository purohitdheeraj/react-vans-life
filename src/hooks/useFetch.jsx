import { useCallback, useEffect, useState } from "react";

/*
		params
		@apiCall : api func()

*/

export const useFetch = (apiCall, id) => {
	const [data, setData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = useCallback(async () => {
		try {
			const response = await apiCall(id);
			setData(response);
		} catch (err) {
			setError(err);
		} finally {
			setIsLoaded(true);
		}
	}, [apiCall, id]);

	useEffect(() => {
		let isMounted = true;

		if (isMounted) {
			fetchData();
		}

		return () => {
			isMounted = false;
		};
	}, [fetchData]);

	return { data, isLoaded, error };
};
