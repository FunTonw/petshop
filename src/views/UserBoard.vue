<template>
<div class="bg">
<Header/>
<UserNavbar/>
<router-view/>
<Foot class="mt-5"/>
</div>
</template>
<style>
.bg{
  background:url('../assets/img/cake_bg.png') fixed no-repeat;
  position: absolute;
  z-index: -100;
  width: 100%;
}
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
import Foot from '../components/Foot.vue';

export default {
  components: {
    Header,
    UserNavbar,
    Foot,
  },
};
</script>
