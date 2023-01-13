<script lang="ts">
    import TruckDetails from "/src/components/truck_details.svelte";
    interface Truck{
        name: string,
        details: string,
        image: string,
    }
    let trucks: Truck[] = [
            {name: "Big Truck", details: "Big Truck Details", image: "/example_truck_large.webp"},
            {name: "Medium Truck", details: "Medium Truck Details", image: "/example_truck_medium.jpg"},
            {name: "Small Truck", details: "Small Truck Details", image: "/example_truck_small.jpg"},
        ]
</script>
<div>
    <title>Vehicle Details</title>
    <h1>Vehicle Details</h1>
    <div class="flexbox">
        {#each trucks as truck}
            <TruckDetails truck={truck} />
        {/each}
    </div>
</div>
<style>
    h1 {
        color: white;
        text-align: center;
    }
    .flexbox {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
    }
</style>