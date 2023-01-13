<script lang="ts">
    export default {
        //data() {},
        methods: {
            character_search() {
                console.log('character search!')
            },
        },
    }
</script>

<template>
    <div class="form-floating">
        <select class="form-select" id="search_rarity" onchange="character_search()">
            <option value="All" selected>All</option>
            <option value="5">5 Star</option>
            <option value="4">4 Star</option>
        </select>
        <label for="search_rarity">Rarity</label>
    </div>
    <div class="form-floating">
        <select class="form-select" id="search_weapon">
            <option value="All" selected>All</option>
            <option value="Bow">Bow</option>
            <option value="Catalyst">Catalyst</option>
            <option value="Claymore">Claymore</option>
            <option value="Polearm">Polearm</option>
            <option value="Sword">Sword</option>
        </select>
        <label for="search_weapon">Weapon</label>
    </div>
    <div class="form-floating">
        <select class="form-select" id="search_vision">
            <option value="All" selected>All</option>
            <option value="Anemo">Anemo</option>
            <option value="Cryo">Cryo</option>
            <option value="Dendro">Dendro</option>
            <option value="Electro">Electro</option>
            <option value="Geo">Geo</option>
            <option value="Hydro">Hydro</option>
            <option value="Pyro">Pyro</option>
        </select>
        <label for="search_vision">Vision</label>
    </div>
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="search_name" />
        <label for="search_name">Name</label>
    </div>
    <button type="button" class="btn btn-danger" id="reset_button">Reset</button>
</template>

<style>
    #reset_button {
        width: 90px;
        height: 60px;
    }
</style>
