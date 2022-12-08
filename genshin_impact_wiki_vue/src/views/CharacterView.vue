<script lang="ts">
    import { useRoute } from 'vue-router';
    import {cure_name} from '../components/cure_name'
    export default{
        setup(){
            const route = useRoute()
        },
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
                    passiveTalents: [{
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
                },
                cure_name
            }
        },
        created() {
            fetch('https://api.genshin.dev/characters/' + this.$route.params.name)
                .then(async (res) => {
                const data = await res.json();
                this.character = data;
            })
                .catch(err => {
                console.log("error:", err);
            });
        },
    }
</script>

<template>
    <h1>{{character.name}}</h1>
    <div class="card">
        <div class="flexbox">
            <img :src="'https://api.genshin.dev/characters/' + cure_name(character.name, character.vision) + '/card'" />
            <div class="card-body">
                <p> 
                    Name: {{character.name}} <br />
                    Title: {{character.title}} <br />
                    Vision: {{character.vision}} <br />
                    Weapon: {{character.weapon}} <br />
                    Nation: {{character.nation}} <br />
                    Affiliation: {{character.name}} <br />
                    Rarity: {{character.rarity}} star <br />
                    Constellation: {{character.constellation}} <br />
                    Birthday: {{character.birthday}} <br />
                    {{character.description}}
                </p>
            </div>
        </div>
        <div class="card-body">
            <h3>Skills</h3>
            <p v-for="skill in character.skillTalents">
                Name: {{skill.name}} <br />
                Type: {{skill.unlock}} <br />
                description: {{skill.description}} <br />
            </p>
            <h3>Passives</h3>
            <p v-for="passive in character.passiveTalents">
                Name: {{passive.name}} <br />
                Unlock: {{passive.unlock}} <br />
                description: {{passive.description}} <br />
            </p>
            <h3>Constellations</h3>
            <p v-for="constellation in character.constellations">
                Name: {{constellation.name}} <br />
                Level: {{constellation.unlock}} <br />
                description: {{constellation.description}} <br />
            </p>
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