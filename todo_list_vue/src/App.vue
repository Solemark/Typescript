<script lang="ts">
  import Todo_list from './components/Todo_list.vue'
  import Counter from './components/Counter.vue'
  export default{
    components: {
      Todo_list,
      Counter
    }
  }
</script>

<template>
  <div class="flexbox">
    <div>
      <Todo_list />
    </div>
    <div>
      <Counter />
    </div>
  </div>
</template>

<style>
  .flexbox{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 5em;
  }
</style>