<script lang="ts">
    import { cure_name } from './cure_name'
    export default {
        props: ['character'],
        data() {
            return { cure_name }
        },
    }
</script>

<template>
    <a :href="'/characters/' + cure_name(character.name, character.vision)">
        <div class="card">
            <img :src="'https://api.genshin.dev/characters/' + cure_name(character.name, character.vision) + '/card'" />
            <div class="card-body">
                <h5 class="card-title">{{ character.name }}</h5>
            </div>
        </div>
    </a>
</template>

<style>
    .card {
        width: 10rem;
    }
    .card img {
        height: 15rem;
    }
    a {
        color: inherit;
        text-decoration: inherit;
    }
</style>
