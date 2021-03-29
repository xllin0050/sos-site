<template>
  <div class="banner">
      <video playsinline autoplay muted :playbackRate="0.5">
        <source src="@/assets/banner/space.mp4">
      </video>
    
    <header class="header ">
      <h1 class="text-white flex flex-col md:flex-row">
        <span class="uppercase font-bold px-2">see</span>
        <span class="uppercase font-bold px-2">outer</span>
        <span class="uppercase font-bold px-2">space</span>
      </h1>
    </header>


  </div>
</template>
<script>
export default {
  name:"Banner",
}
</script>
<style scoped>
video {
  object-fit: cover;
  width: 100%;
  height: 300px;
  position: sticky;
  top: 0;
  left: 0;
  filter: grayscale(1);
}

.header {
  position: absolute;
  top: 95px;
  left: 50%;
  transform: translateX(-50%);
  height: 300px;
}

.header h1{
  font-size:58px;
}

@media (min-width:768px){
  .header{
    top:175px;
  }
}
</style>
