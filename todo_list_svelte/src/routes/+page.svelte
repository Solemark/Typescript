<script lang="ts">
</script>

<svelte:head>
	<title>Svelte Components</title>
</svelte:head>
<section>
    <div class="container">
        <p>Hello World!</p>
        <p>This is the root, use the navbar to visit components!</p>
    </div>
</section>

<style>
    .container{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        text-align: center;
    }
    p{
        color: white;
    }
</style>
