<script lang="ts">
    import { useRoute } from 'vue-router'
    import { cure_name } from '../components/cure_name'
    import CharacterDetails from '../components/CharacterDetails.vue'
    import CharacterDetailsAbilities from '@/components/CharacterDetailsAbilities.vue'
    export default {
        setup() {
            const route = useRoute()
        },
        data() {
            return {
                character: {
                    name: '',
                    title: '',
                    vision: '',
                    weapon: '',
                    nation: '',
                    affiliation: '',
                    rarity: 0,
                    constellation: '',
                    birthday: '',
                    description: '',
                    skillTalents: [
                        {
                            name: '',
                            unlock: '',
                            description: '',
                            type: '',
                        },
                    ],
                    passiveTalents: [
                        {
                            name: '',
                            unlock: '',
                            description: '',
                            level: 0,
                        },
                    ],
                    constellations: [
                        {
                            name: '',
                            unlock: '',
                            description: '',
                            level: 0,
                        },
                    ],
                },
                cure_name,
            }
        },
        created() {
            fetch('https://api.genshin.dev/characters/' + this.$route.params.name)
                .then(async (res) => {
                    const data = await res.json()
                    this.character = data
                })
                .catch((err) => {
                    console.log('error:', err)
                })
        },
        components: { CharacterDetails, CharacterDetailsAbilities },
    }
</script>

<template>
    <h1>{{ character.name }}</h1>
    <div class="card">
        <div class="flexbox">
            <img :src="'https://api.genshin.dev/characters/' + cure_name(character.name, character.vision) + '/card'" />
            <div class="card-body">
                <CharacterDetails v-bind:character="character" />
            </div>
        </div>
        <div class="card-body">
            <h2>Skills</h2>
            <CharacterDetailsAbilities v-bind:abilities="character.skillTalents" />
            <h2>Passives</h2>
            <CharacterDetailsAbilities v-bind:abilities="character.passiveTalents" />
            <h2>Constellations</h2>
            <CharacterDetailsAbilities v-bind:abilities="character.constellations" />
        </div>
    </div>
</template>

<style scoped>
    .flexbox {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
    .card img {
        width: 15rem;
        height: 20rem;
    }
    a {
        color: inherit;
        text-decoration: inherit;
    }
</style>
