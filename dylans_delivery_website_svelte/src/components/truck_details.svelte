<script lang="ts">
    interface Truck{
        name: string,
        details: string,
        image: string,
    }
    export let truck: Truck
</script>
<div class="card" style="width: 18rem">
    <img src={truck.image} class="card-img-top" alt="Big Truck" />
    <div class="card-body">
        <h5 class="card-title">{truck.name}</h5>
        <p class="card-text">{truck.details}</p>
    </div>
</div>

<style>
    .card {
        background-color: #0e1013;
    }
    .card-body {
        color: white;
    }
</style>