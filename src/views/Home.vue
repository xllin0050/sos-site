<template>
  <div class="home">
    <Banner />
    <PhotoShow />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import PhotoShow from '@/components/PhotoShow'

export default {
  name: 'Home',
  components: {
    Banner,
    PhotoShow
  }
}
</script>
