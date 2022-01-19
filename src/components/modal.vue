<template>
  <div>
    <div class="modal-backdrop" @click="$emit('clickBackground')">
      <div class="modal">{{description}}</div>  
    </div> 
  </div>
</template>
<script>
export default {
  props: ['description']
}
</script>