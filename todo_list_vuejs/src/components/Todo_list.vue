<script lang="ts">
export default {
  data() {
    return {
      todo: [{
        name: "",
        completed: true,
      }],
      task: "",
    }
  },
  methods:{
    new_task(){
        this.todo.push({name: this.task, completed: false})
        this.task = ""
    },
  }
}
</script>

<template>
  <input type="text" id="task" v-model="task" />
  <button type="submit" @click="new_task">Submit</button>
  <div v-for="task in todo">
      <div v-if="!task.completed">
          {{task.name}} <input type="checkbox" v-model="task.completed" />
      </div>
  </div>
</template>