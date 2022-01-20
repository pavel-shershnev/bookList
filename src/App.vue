<template>
  <div id="app">
    <div class="container" >
      <categories :category="categories" :length="booksList.length" class="card-categories left" v-model="checkedNames" @input="filterArray">
      </categories>
      <div class="card card-books right" v-if="isChecked===false">
        <h1>Выберите категорию</h1>
      </div>
      <books-list v-else class="card card-books right" style="margin-left: 10px; position: sticky; top: 10px" :next="next" :booksList="booksList" @addMore="addMore" >
      </books-list> 
    </div>
  </div>
</template>

 <script>
import categories from './components/categories.vue'
import booksList from './components/booksList.vue'

export default {
  name: 'App',
  components: {
    categories, booksList
  },
  data() {
    return {
      checkedNames: [],
      categories: [],
      booksList: [],
      checkedApp: [],
      isChecked: true,
      page: 1,
      next: true,
      filteredArray: [],
      debouncedAddMore: this.debounce(this.addMore2, 300),
      debouncedFilterArrayCategory: this.debounce(this.filterArrayCategory, 300),
      arrayCategory: []
    }
  },
  computed: {
    compCheckedNames() {
      return this.checkedNames
    }
  },
  methods: {
    filterArray(array){
      this.arrayCategory = array
      this.debouncedFilterArrayCategory();
    },
    //задержка запроса к серверу
    debounce(fn, bufferInterval) {
      var timeout;
      return function () {
        clearTimeout(timeout);
        timeout = setTimeout(fn.apply.bind(fn, this, arguments), bufferInterval);
      };
    },
    async addMore() {
      this.debouncedAddMore();
    },
    //show more filtered books
    async addMore2() {
      const url2 = `https://webdev.modumlab.com/api/book/list`
      this.page++
      const params = JSON.stringify({
      categories: this.filteredArray.length > 0 ? this.filteredArray : this.compCheckedNames,
      page: this.page
      })
      await fetch(url2, {
        method: 'POST',
        body: params,
        headers: {
        'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => {
        this.next = data.data.next
        this.booksList = [...this.booksList, ...data.data.list]   
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
    },
    //show filtered books 
    async filterArrayCategory(){
      this.page = 1
      this.next = true
      if(this.arrayCategory.length > 0) {
        this.filteredArray = this.arrayCategory
        this.isChecked = true
        const url2 = `https://webdev.modumlab.com/api/book/list`
        const params = JSON.stringify({
        categories: this.filteredArray,
        page: this.page
        })
        await fetch(url2, {
          method: 'POST',
          body: params,
          headers: {
          'Content-Type': 'application/json',
          },
        })
        .then(response => response.json())
        .then(data => {
          this.booksList = data.data.list
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      } else  {return this.isChecked = false}
    }
  },
  async mounted() {
   const url1 = `https://webdev.modumlab.com/api/book/categories`
     await fetch(url1, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      this.categories = data.data.list
      this.checkedNames = this.categories.map((obj)=>obj.id)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
//========================================================================
    const url2 = `https://webdev.modumlab.com/api/book/list`
    const params = JSON.stringify({
      categories: this.compCheckedNames,
      page: 1
    })
    await fetch(url2, {
      method: 'POST',
      body: params,
      headers: {
      'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      this.booksList = data.data.list
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}
</script>
<style>
  @import './assets/index.css';
  .container{
    width: 100%
  }
  .card-categories{
    position: sticky; 
    top: 9px;
    width: 20%;
    display: inline-block;
    margin-top: 0px;
  }
  .card-books{
    margin-left: 10px;
    width: 75%;
    display: inline-block;
  }
  .left, .right { vertical-align: top; }
</style>
