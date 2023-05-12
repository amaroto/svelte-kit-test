<script lang="ts">
	import PokemonCard from '../../components/pokemonCard.svelte';

	import type { PageData } from './$types';
	export let data: PageData;

	const { initialPokemon } = data;

	let pokemonSelected: any = initialPokemon;
</script>

<section>
	<PokemonCard
		pokemon={pokemonSelected}
		pokemons={['pikachu', 'charmander', 'bulbasaur', 'eevee']}
	/>
</section>
