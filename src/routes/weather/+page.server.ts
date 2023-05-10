import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const getInfo = async () => {
		const res = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13', {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'da99cc3f91msh3c204689122bf75p150864jsn36d8c88087c8',
				'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
			}
		});
		const data = await res.json();

		return data;
	};

	return { weather: getInfo() };
}) satisfies PageServerLoad;
