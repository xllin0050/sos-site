<template>
  <section v-if="allData.length" class="mt-4 px-4">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max ">
      <div v-for="data, index in allData" :key="data.date" @mouseenter="isShow = index" @mouseleave="isShow = null" class="relative text-yellow-200 flex flex-col justify-between transition duration-300 ease-in-out hover:bg-black hover:opacity-80">
        <div class="py-6 px-2">
          <img :src=data.url alt="" >
        </div>
        <div class="text-2xl text-center py-5">{{data.title}}</div>
        <div v-if="isShow===index" @click="addToList(data,index)" class="addBtn text-2xl text-yellow-100 bg-red-800 p-3 rounded-md absolute top-1/2 transform -translate-y-1/2 right-1/2 translate-x-1/2">Put in list
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios"
import store from '../store'
export default {
  name:"SellPhoto",
  data(){
    return{
      allData:[],
      isShow:null
    }
  },
  mounted(){
    const key = `zeq8eO2fZHzFXuVUOsp8y48yZUji6mNzKXf8wSdW`
    const api =`https://api.nasa.gov/planetary/apod?api_key=${key}&count=9`
    axios
      .get(api)
      .then((response) => this.allData = response.data)
      .catch(err => console.log(err.message))
  },
  methods:{
    addToList(data,index){
    store.commit({
      type:'addItem', 
      item:{
        index:index, 
        date:data.date, 
        title:data.title, 
        url:data.url
        }
        })
    }
  }
}
</script>
<style scoped>
img{
  max-height: 400px;
  margin: 0 auto;
}

</style>