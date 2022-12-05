<script lang="ts">
    export default{
        data(){
            return{
                characters: [{
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
                }]
            }
        },
        methods: {
            cure_name(name: string, vision: string): string{
                name = name.toLowerCase()
                name = name.replace(" ", "-")
                switch(name){
                    case "kamisato-ayaka":
                        name = "ayaka"
                        break
                    case "kaedehara-kazuha":
                        name = "kazuha"
                        break
                    case "sangonomiya-kokomi":
                        name = "kokomi"
                        break
                    case "raiden-shogun":
                        name = "raiden"
                        break
                    case "kujou-sara":
                        name = "sara"
                        break
                    case "traveler":
                        name = "traveler-" + vision.toLowerCase()
                        break
                    default:
                        break
                }
                return name
            }
        },
        created(){
            fetch('https://api.genshin.dev/characters/all')
                .then(async res => {
                    const data = await res.json()
                    this.characters = data
                })
                .catch(err => {
                    console.log('error:', err)
                })
        }
    }
</script>

<template>
    <h1>Characters</h1>
    <div class="flexbox">
        <div v-for="character in characters">
            <a :href="('/characters/' + cure_name(character.name, character.vision))">
                <div class="card">
                    <img :src="'https://api.genshin.dev/characters/' + cure_name(character.name, character.vision) + '/card'" />
                    <div class="card-body">
                        <h5 class="card-title">{{character.name}}</h5>
                    </div>
                </div>
            </a>
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
    .card{
        width: 10rem;
    }
    .card img{
        height: 15rem;
    }
    a{
        color: inherit;
        text-decoration: inherit;
    }
</style>