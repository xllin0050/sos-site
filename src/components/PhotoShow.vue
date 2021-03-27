<template>
  <section v-if="allData.length" class="px-4">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max ">
      <div v-for="data in allData" :key="data.date" class="text-white flex flex-col justify-between">
        <div class="py-10">
          <img :src=data.url alt="" >
        </div>
        <div class="text-2xl text-center py-5">{{data.title}}</div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios"

export default {
  name:"SellPhoto",
  data(){
    return{
      allData:[]
    }
  },
  mounted(){
    const key = `zeq8eO2fZHzFXuVUOsp8y48yZUji6mNzKXf8wSdW`
    const api =`https://api.nasa.gov/planetary/apod?api_key=${key}&count=5`
    axios
      .get(api)
      .then((response) => this.allData = response.data)
      .catch(err => console.log(err.message))
  }
}
</script>
<style scoped>
img{
  width: 100%;
}

</style>