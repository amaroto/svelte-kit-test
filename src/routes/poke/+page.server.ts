import { getParam } from '../../utils/urlParams';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, request }) => {
	const pokemonParam = getParam(request.url, 'pokemon');

	if (pokemonParam) {
		const getPokemonInfo = async (pokemon: string) => {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
				method: 'GET',
				headers: {}
			});
			const data = await res.json();
			return data;
		};
		return { initialPokemon: getPokemonInfo(pokemonParam) };
	}

	return { initialPokemon: request.url };
}) satisfies PageServerLoad;
