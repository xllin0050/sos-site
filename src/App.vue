<template>
    <nav id="nav" class="nav flex justify-between items-center px-3">
      <div class="text-2xl font-bold pl-3">SOS</div>
      <div class="font-bold">
        <!-- <router-link :to="{ name : 'Home' }">Home</router-link> | -->
        <!-- <router-link to="/about">About</router-link> -->
      </div>
    </nav>

  <router-view/>

    <footer class="">
    <ul class="text-white text-xl uppercase flex justify-end px-4">
      <li class="ml-10">VUE.JS 3</li>
      <li class="ml-10">NASA API</li>
      <li class="ml-10">website building practice</li>
    </ul>
  </footer>
</template>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

  body{
    
    background-color: #1b1b1b;
  }

 .nav{
   height:80px;
   color: #fff;
 }

 footer{
   height:120px;
 }

 footer ul{
   padding-top:40px;
 }
</style>
