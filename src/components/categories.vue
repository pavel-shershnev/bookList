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
      <!-- <span>Поиск по тегам: </span> -->
      <!-- <autocomplete :list="filteredList" @input="handleInput" /> -->
      <!-- <button type="submit">Поиск</button> -->
    </div>
  </div>
</template>
<script>
// import autocomplete from './autocomplete.vue'
export default {
  // components: {autocomplete},
  emits: ['input'],
  props: [ 'value', 'category', 'length'],
  data() {
    return {
      filterInput: null,
      list: [
        "First",
        "Second",
        "Third",
        "Fourth",
        "Fifth",
        "Sixth",
        "Seventh"
      ]
    }
  },
  computed: {
    filteredList() {
      if (this.filterInput) {
        return this.list.filter(e => e.toLowerCase().indexOf(this.filterInput.toLowerCase()) !== -1)
      } else {
        return this.list
      }
    },
    methods: {
       handleInput(e) {
      this.filterInput = e
    }
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