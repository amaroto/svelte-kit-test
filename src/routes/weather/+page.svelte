<script lang="ts">
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	
	const { weather } = data;
</script>

<section>
	<h1>Weather</h1>

	<p>{weather?.location?.country}</p>
</section>
