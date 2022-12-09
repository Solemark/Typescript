<script lang="ts">
    import { cure_date } from './cure_date'
    export default {
        props: ['character'],
        data() {
            return { cure_date }
        },
    }
</script>
<template>
    <p>
        Name: {{ character.name }} <br />
        Title: {{ character.title }} <br />
        Vision: {{ character.vision }} <br />
        Weapon: {{ character.weapon }} <br />
        Nation: {{ character.nation }} <br />
        Affiliation: {{ character.name }} <br />
        Rarity: {{ character.rarity }} star <br />
        Constellation: {{ character.constellation }} <br />
        Birthday: {{ cure_date(character.birthday) }} <br />
        {{ character.description }}
    </p>
</template>
