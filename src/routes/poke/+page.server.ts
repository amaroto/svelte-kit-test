import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, request }) => {
	const url = request.url;
	const urlArray = url.split('?');

	if (urlArray.length > 1) {
		const params = urlArray[1];
		const paramsArray = params.split('&');

		const pokemonParam = paramsArray.find((p) => p.includes('pokemon'));

		if (pokemonParam) {
			const pokemonParamFormatted = pokemonParam.split('=');
			const getPokemonInfo = async (pokemon: string) => {
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
					method: 'GET',
					headers: {}
				});
				const data = await res.json();
				return data;
			};
			return { initialPokemon: getPokemonInfo(pokemonParamFormatted[1]) };
		}
	}

	return { initialPokemon: null };
}) satisfies PageServerLoad;
