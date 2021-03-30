<template>
  <div class="home">
    <Banner />
    <PhotoShow :key="key"/>
    <div @click="reLoad" 
      class="inline-block text-xl text-yellow-200 bg-gray-700 p-5 mt-2 rounded-sm cursor-pointer">
      more and more
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import PhotoShow from '@/components/PhotoShow'


export default {
  name: 'Home',
  components: {
    Banner,
    PhotoShow,
  },
  data(){
    return{
      key:0
    }
  },
  methods:{
    //重整照片區塊
    reLoad(){
      this.key +=1
    }
  }
}
</script>
<style scoped>

</style>