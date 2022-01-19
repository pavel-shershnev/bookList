<template>
  <div class="card" @click="$emit('clickCard')">
    <img :src="img" alt="" style="object-fit:contain; height:350px; width:100%"  >
    <h4  class="title"><b>{{title}}</b></h4> 
    <span><strong><b>Категория:</b> </strong></span> 
    <p style="margin-bottom:0px; margin-top:0px">{{category}}</p>
    <span><strong><b>Автор:</b> </strong></span> 
    <p style="margin-bottom:0px; margin-top:0px"> {{author}}</p>
    <span><strong><b>Год:</b> </strong></span>
    <p style="margin-bottom:0px;margin-top:0px">{{year}} год</p>
  </div> 
</template>
<script>
export default {
  props: ['img', 'title', 'category', 'author', 'year', 'description']
}

</script>
<style scoped>
.card{
  margin: 1%;
  width: 30%;
}
.card:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    cursor: pointer;
}
.title{
  height:50px; 
  margin-top: 0px; 
  background:rgb(240, 240, 240); 
  margin-bottom:10px; 
  text-align: center;
}
</style>