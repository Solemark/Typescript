<template>
    <h1>Vehicle Details</h1>

    <div class="flexbox">
        <div class="card" style="width: 18rem">
            <img src="https://cdn.britannica.com/17/126517-050-9CDCBDDF/semi-semitrailer-truck-tractor-highway.jpg" class="card-img-top" alt="Big Truck" />
            <div class="card-body">
                <h5 class="card-title">Big Truck Name</h5>
                <p class="card-text">Big Truck Details</p>
            </div>
        </div>
        <div class="card" style="width: 18rem">
            <img src="https://res.cloudinary.com/rentalwebsolutions/image/upload/v1562159464/orana/hino.jpg" class="card-img-top" alt="Medium Truck" />
            <div class="card-body">
                <h5 class="card-title">Medium Truck Name</h5>
                <p class="card-text">Medium Truck Details</p>
            </div>
        </div>
        <div class="card" style="width: 18rem">
            <img src="https://s1.cdn.autoevolution.com/images/news/2023-chevrolet-montana-small-pickup-truck-confirmed-for-production-in-brazil-161096_1.jpg" class="card-img-top" alt="Small Truck" />
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
    }
    .flexbox {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .card {
        background-color: #0e1013;
    }
    .card-body {
        color: white;
    }
</style>
