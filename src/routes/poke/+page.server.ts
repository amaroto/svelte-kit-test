import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, url }) => {
	const pokemonParam = url.searchParams.get('pokemon');

	const getPokemonInfo = async (pokemon: string) => {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
			method: 'GET',
			headers: {}
		});
		const data = await res.json();
		return data;
	};

	if (pokemonParam) {
		return { initialPokemon: getPokemonInfo(pokemonParam) };
	}

	return { initialPokemon: {} };
}) satisfies PageServerLoad;
