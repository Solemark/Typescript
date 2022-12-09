<script lang="ts">
    import CharacterCard from '../components/CharacterCard.vue'
    export default {
        data() {
            return {
                characters: [
                    {
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
                        PassiveTalents: [
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
                ],
            }
        },
        created() {
            fetch('https://api.genshin.dev/characters/all')
                .then(async (res) => {
                    const data = await res.json()
                    this.characters = data
                })
                .catch((err) => {
                    console.log('error:', err)
                })
        },
        components: { CharacterCard },
    }
</script>

<template>
    <h1>Characters</h1>
    <div class="flexbox">
        <div v-for="character in characters">
            <CharacterCard v-bind:character="character" />
        </div>
    </div>
</template>

<style scoped>
    .flexbox {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
</style>
