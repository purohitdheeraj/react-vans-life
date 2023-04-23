export async function getVans(id) {
	const url = id ? `/api/vans/${id}` : "/api/vans";

	const response = await fetch(url);
	if (!response.ok) {
		const error = new Error("Failed to Fetch");
		error.status = response.status;
		error.statusText = response.statusText;
		throw error;
	}
	const parseResponse = await response.json();
	return parseResponse.vans;
}
