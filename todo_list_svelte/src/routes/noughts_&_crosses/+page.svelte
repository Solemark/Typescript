<script lang="ts">
	import { afterUpdate } from 'svelte'

	let value1 = "_"
	let value2 = "_"
	let value3 = "_"
	let value4 = "_"
	let value5 = "_"
	let value6 = "_"
	let value7 = "_"
	let value8 = "_"
	let value9 = "_"
	let turn = true

	const select_turn = ():boolean => {
		turn = !turn
		return turn
	}

	const change_socket = (turn: boolean):string => {
		if(turn){
			return "X"
		} else{
			return "0"
		}
	}

	afterUpdate(() => {
		//check the board for a winner
		console.log("afterUpdate is running!")
	})
</script>

<svelte:head>
	<title>Noughts & Crosses</title>
</svelte:head>
<section>
	<div class="container">
		<h2>Noughts and Crosses</h2>
		<p>It is {change_socket(!turn)}'s turn</p>
 		<div>
			<button class="btn btn-dark" on:click={() => value1 = change_socket(select_turn())}>{value1}</button>
			<button class="btn btn-dark" on:click={() => value2 = change_socket(select_turn())}>{value2}</button>
			<button class="btn btn-dark" on:click={() => value3 = change_socket(select_turn())}>{value3}</button>
		</div>
		<div>
			<button class="btn btn-dark" on:click={() => value4 = change_socket(select_turn())}>{value4}</button>
			<button class="btn btn-dark" on:click={() => value5 = change_socket(select_turn())}>{value5}</button>
			<button class="btn btn-dark" on:click={() => value6 = change_socket(select_turn())}>{value6}</button>
		</div>
		<div>
			<button class="btn btn-dark" on:click={() => value7 = change_socket(select_turn())}>{value7}</button>
			<button class="btn btn-dark" on:click={() => value8 = change_socket(select_turn())}>{value8}</button>
			<button class="btn btn-dark" on:click={() => value9 = change_socket(select_turn())}>{value9}</button>
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
		color: white;
	}
</style>
