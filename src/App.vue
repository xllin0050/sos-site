<template>
    <nav id="nav" class="nav flex justify-between items-center px-3">
      <div class="text-2xl font-bold pl-3">SOS</div>
      <div class="font-bold">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </nav>

  <router-view/>

    <footer class="">
    <ul class="text-white text-xl uppercase flex justify-end px-4">
      <li class="ml-5">VUE.JS 3</li>
      <li class="ml-5">NASA API use AXIOS</li>
      <li class="ml-5">website building practice</li>
    </ul>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  body{
    background-color: #040404;
  }

 .nav{
   height:80px;
   color: #fff;
 }

 footer{
   height:120px;
 }

 footer ul{
   padding-top:60px;
 }
</style>
