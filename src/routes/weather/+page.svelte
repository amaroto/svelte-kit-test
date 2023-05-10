<script lang="ts">
	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';

	export let data: LayoutData;

	console.log(data);

	const getInfo = async () => {
		const res = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13`, {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'da99cc3f91msh3c204689122bf75p150864jsn36d8c88087c8',
				'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
			}
		});
		const data = await res.json();

		console.log(data);
		return data;
	};

	onMount(() => {
		console.log(getInfo());
	});
</script>

<section>
	<h1>Weather</h1>
</section>
