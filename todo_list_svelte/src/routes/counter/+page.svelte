<script lang="ts">
	let count = 0
	const increment = (): number => count++
	const decrement = (): number => count--
</script>

<svelte:head>
	<title>Counter</title>
</svelte:head>
<section>
	<div class="container">
		{count}
		<div id="buttons">
			<button class="btn btn-primary" on:click={increment}>increment</button>
			<button class="btn btn-danger" on:click={decrement}>decrement</button>
		</div>
	</div>
</section>

<style>
	.container{
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		text-align: center;
		align-items: center;
		margin-top: 1rem;
		color: white;
	}
	#buttons{
		display: flex;
		flex-direction: row;
	}
</style>
