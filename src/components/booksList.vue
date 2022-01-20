<template>
<div>

  <modal 
  v-show = "isModal" 
  :description = "description" 
  @clickBackground = "isModal=!isModal" 
  />

  <div class="row">
    <book-card v-for="item in compBooksSearch"  
    :key = "item.id" 
    :img = "item.image" 
    :title = "item.name"
    :category = "compCategName[item.category_id]" 
    :author = "item.author"
    :year = "item.year"
    :inputSearchText = "inputSearchText"
    @clickCard = "showDescription(item.description)"
    >
    </book-card>
  </div>
  <br>

  <button :disabled="!next" class="btn primary " style=" margin: auto; display: block;" @click="$emit('addMore')">Загрузить еще</button>
</div>
</template>
<script>
import bookCard from './bookCard.vue'
import modal from './modal.vue'

export default {
  data() {
    return {
      isDisabled: false,
      isModal: false,
      description: null
    }
  },
  props: ['booksList', 'next', 'inputSearchText', 'category'],
  components: {bookCard, modal},
  computed: {
    compCategName() {
      let obj = {}
      this.category.forEach(item => {
        obj[item.id] = item.name
      })
      return obj
    },
    compBooksSearch() {
      return this.booksList
        .filter( item => 
        item.name 
        .concat(item.author, this.compCategName[item.category_id], item.description, item.year)
        .toLowerCase()
        .indexOf(this.inputSearchText
        .toLowerCase()) !== -1)
    }
  },
  mounted() {
  },
  methods: {
    showDescription(description) {
      this.isModal = true
      this.description = description
    },
  },
  updated() { 
  },
}
</script>

<style scoped>
.row {
display: flex;
flex-wrap: wrap;
}
</style>