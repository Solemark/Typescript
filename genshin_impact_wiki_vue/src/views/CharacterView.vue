<script lang="ts">
    export default{
        data(){
            return{
                character: {
                    name: "",
                    title: "",
                    vision: "",
                    weapon: "",
                    nation: "",
                    affiliation: "",
                    rarity: 0,
                    constellation: "",
                    birthday: "",
                    description: "",
                    skillTalents: [{
                        name: "",
                        unlock: "",
                        description: "",
                        type: "",
                    }],
                    PassiveTalents: [{
                        name: "",
                        unlock: "",
                        description: "",
                        level: 0,
                    }],
                    constellations: [{
                        name: "",
                        unlock: "",
                        description: "",
                        level: 0,
                    }],
                }
            }
        },
    }
</script>

<template>
    <h1>{{character.name}}</h1>
    <div class="flexbox">
        <div class="card">
            <img :src="'https://api.genshin.dev/characters/albedo/card'" />
            <div class="card-body">
                <p>{{character.description}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .flexbox{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .card img{
        width: 10rem;
        height: 15rem;
    }
    a{
        color: inherit;
        text-decoration: inherit;
    }
</style>