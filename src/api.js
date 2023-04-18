export async function getVans(id) {
	const url = id ? `/api/vans/${id}` : "/api/vans";

	const response = await fetch(url);
	if (!response.ok) {
		throw Error(
			`${response.statusText} ${response.status}
      `
		);
	}
	const parseResponse = await response.json();
	return parseResponse.vans;
}
