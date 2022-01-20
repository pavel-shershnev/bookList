<template>
  <div class="card">
    <div class="form-checkbox" v-for="cat in copmCategory" :key="cat.id">
      <input class="checkbox input" type="checkbox" :id="cat.id" :value="cat.id" v-model="model">
      <label class="label" :for="cat.id">{{cat.name}}</label>
    </div>
    <div>
      <span style="background: rgb(240, 240, 240); ">Книг в коллекции: <strong><b>{{length}}</b></strong></span>
    </div><br>
    <div>
      <span>Поиск по сайту: </span>
    <input type="text" v-model="search">
    </div>
  </div>
</template>
<script>

export default {
  
  emits: ['input'],
  props: [ 'value', 'category', 'length'],
  data() {
    return {
    search: ''
    }
  },
  computed: {
    rezultSeach() {
      return this.todos.filter(item => item.title.indexOf(this.search) !== -1)
    },
 
    model: {
      get() { return this.value },
      set(newValue) { this.$emit('input', newValue) }
    },
    copmCategory() {
      return this.category
    }
  },
  mounted() {
   this.checked = this.compCategory
  },
}
</script>
<style scoped>
 
</style>