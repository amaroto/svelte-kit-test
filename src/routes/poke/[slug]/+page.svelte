<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { LayoutData } from './$types';

	import PokemonCard from '../../../components/pokemonCard.svelte';

	export let data: LayoutData;
	const { initialPokemon } = data;

	let pokemonSelected: any = initialPokemon;
</script>

<section>
	<PokemonCard
		pokemon={pokemonSelected}
		pokemons={['pikachu', 'charmander', 'bulbasaur', 'eevee']}
	/>
</section>
