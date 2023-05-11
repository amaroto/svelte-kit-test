import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/public';

export const load = (async ({ fetch }) => {
	const getInfo = async () => {
		const res = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13', {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': `${env.PUBLIC_RAPID_API_KEY}`,
				'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
			}
		});
		const data = await res.json();

		return data;
	};

	return { weather: getInfo() };
}) satisfies PageServerLoad;
