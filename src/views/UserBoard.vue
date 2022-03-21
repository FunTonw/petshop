<template>
<Header/>
<UserNavbar/>
<router-view/>
</template>
<style>
  ul > li > a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>

<script>
import Header from '../components/Header.vue';
import UserNavbar from '../components/UserNavbar.vue';

export default {
  components: {
    Header,
    UserNavbar,
  },
};
</script>
