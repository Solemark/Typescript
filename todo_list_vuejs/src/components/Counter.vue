<script lang="ts">
export default {
  data() {
    return {
      count: 0
    }
  },
  methods:{
    add(){
      this.count++
    },
    minus(){
      this.count--
    }
  },
}
</script>

<template>
  <button @click="add">+</button>
  {{count}}
  <button @click="minus">-</button>
</template>