export async function getVans() {
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
