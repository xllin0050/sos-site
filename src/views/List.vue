<template>
  <h1>Your List</h1>
  <p>
    {{ show.item.date }}
  </p>


</template>

<script>
import store from '../store'
export default {

  data(){
    return{

    }
  },
  computed:{
   
    show(){
      return store.state.items
    }
    
  }
}
</script>

<style scoped>
  
</style>