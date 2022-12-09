<script lang="ts">
    export default {
        props: ['abilities'],
    }
</script>
<template>
    <div v-for="ability in abilities">
        <h4>{{ ability.name }}</h4>
        <h5>{{ ability.unlock }}</h5>
        <p>{{ ability.description }}</p>
    </div>
</template>
