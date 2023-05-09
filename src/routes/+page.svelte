<script lang="ts">
	import { fade } from 'svelte/transition';
	import Loader from '../components/loader.svelte';

	let pokemonSelected = null;

	let loading = false;

	const pokemons = ['pikachu', 'charmander', 'bulbasaur', 'gengar'];

	const getPokemonInfo = (pokemon) => {
		loading = true;
		fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon, { method: 'GET', headers: {} })
			.then((response) => response.json())
			.then((data) => (pokemonSelected = data))
			.finally(() =>
				setTimeout(() => {
					loading = false;
				}, 500)
			);
	};

	getPokemonInfo('charmander');
</script>

<section>
	<h1>Pokemon List</h1>

	<ul>
		{#each pokemons as pokemon}
			<li class="pt-10">
				<button
					disabled={loading || pokemonSelected?.name === pokemon}
					on:click={() => getPokemonInfo(pokemon)}>{pokemon}</button
				>
			</li>
		{/each}
	</ul>

	{#if loading}
		<Loader />
	{/if}

	{#if !loading}
		<div transition:fade>
			<h3><b>Pokemon selected:</b> {pokemonSelected?.name}</h3>

			{#if pokemonSelected}
				<img height="auto" width="250px" src={pokemonSelected?.sprites?.back_default} />
                <img height="auto" width="250px" src={pokemonSelected?.sprites?.front_default} />
				<img height="auto" width="250px" src={pokemonSelected?.sprites?.front_shiny} />
			{/if}

			<h4>Moveset:</h4>
			{#if pokemonSelected}
				<ul>
					{#each pokemonSelected?.abilities as abilities}
						<li class="pt-10">{abilities.ability.name}</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/if}
</section>

<style>
	section {
		margin-left: 40px;
		margin-right: 40px;
		margin-top: 40px;
		margin-bottom: 40px;
	}
	.pt-10 {
		padding-top: 10px;
	}
</style>
