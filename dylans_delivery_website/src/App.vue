<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Dylan's Delivery Website</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/Vehicle_details">Vehicle Details</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/contact_us">Contact Us</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <RouterView />
    </div>
</template>

<style>
    body {
        background-color: #14171a;
    }
    .navbar-brand {
        color: white;
    }
    .navbar-brand:hover {
        color: white;
    }
    .nav-link {
        color: white;
    }
    .nav-link:hover {
        color: white;
    }
    .nav-link:visited {
        color: white;
    }
</style>
