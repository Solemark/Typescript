<template>
    <h1>Vehicle Details</h1>

    <div class="flexbox">
        <div class="card" style="width: 18rem">
            <img src="/example_truck_large.webp" class="card-img-top" alt="Big Truck" />
            <div class="card-body">
                <h5 class="card-title">Big Truck Name</h5>
                <p class="card-text">Big Truck Details</p>
            </div>
        </div>
        <div class="card" style="width: 18rem">
            <img src="/example_truck_medium.jpg" class="card-img-top" alt="Medium Truck" />
            <div class="card-body">
                <h5 class="card-title">Medium Truck Name</h5>
                <p class="card-text">Medium Truck Details</p>
            </div>
        </div>
        <div class="card" style="width: 18rem">
            <img src="/example_truck_small.jpg" class="card-img-top" alt="Small Truck" />
            <div class="card-body">
                <h5 class="card-title">Small Truck Name</h5>
                <p class="card-text">Small Truck Details</p>
            </div>
        </div>
    </div>
</template>
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
    .card {
        background-color: #0e1013;
    }
    .card-body {
        color: white;
    }
</style>
