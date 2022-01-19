<template>
<div>
  <modal v-show="isModal" :description="description" @clickBackground="isModal=!isModal" />
  <div class="row">
    <book-card v-for="item in booksList"  
    :key="item.id" 
    :img="item.image" 
    :title="item.name"
    :category="categoryName[item.category_id]" 
    :author="item.author"
    :year="item.year"
    @clickCard="showDescription(item.description)"
    >
    </book-card>
  </div>
  <br>
  <button :disabled="!next" class="btn primary " style=" margin: auto; display: block;" @click="$emit('addMore')" >Загрузить еще</button>
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
      description: null,
      categoryName: {
        10031: 'Фантастика',
        10035: 'Приключения',
        10056: 'Боевики',
        10109: 'Современная проза',
        10111: 'Зарубежная литература',
        10112: 'Фэнтези',
        17032: 'Детективы'
      }
    }
  },
  props: ['booksList', 'next'],
  components: {bookCard, modal},
  mounted() {
  },
  methods: {
    showDescription(description) {
      this.isModal = true
      this.description = description
    },
  },
}
</script>
<style scoped>
.row {
display: flex;
flex-wrap: wrap;
}
</style>