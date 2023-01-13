<script lang="ts">
	interface Todo{
		name: string,
		completed: boolean,
	}

	let todos: Todo[] = []
	let task: string = ""
	let task_input: HTMLInputElement

	const new_task = (): void => {
		if(task == ""){
			return
		}
		todos = todos.concat({name: task, completed: false})
		task = ""
		task_input.focus()
	}

	const remove_task = (): void => {
		todos = todos.filter(todo => !todo.completed)
	}

</script>

<svelte:head>
	<title>Todo List</title>
</svelte:head>
<section>
	<div class="container">
		<form class="input-dark" on:submit|preventDefault={new_task}>
			<input type="text" class="form-control" id="task_input" bind:value={task} bind:this={task_input} placeholder="Insert task" />
			<button type="button" class="btn btn-primary" on:click={new_task}>Submit</button>
			<button type="button" class="btn btn-danger" on:click={remove_task}>Remove Completed</button>
		</form>
		<div id="todo_list">
			{#each todos as todo}
			<div class:name={todo.name} class:completed={todo.completed}>
				<input type=checkbox class="form-check-input me-1" bind:checked={todo.completed}>
				{todo.name}
			</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.completed{
		opacity: 0.5;
	}
	.container{
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		text-align: center;
		align-items: center;
		margin-top: 1rem;
	}
	#todo_list{
		text-align: left;
		color: white;
	}
	#task_input{
		max-width: 20rem;
	}
</style>
