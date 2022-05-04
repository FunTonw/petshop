<template>
    <Loading :active="isLoading"  :is-full-page="true">
    <div>
      <div class="card">
        <div class="card-body text-center fs-1 fw-bold text-secondary m-3">
            <p><i class="bi bi-check2-square"></i></p>
            <p>{{ isLoadingMassege }}</p>
        </div>
      </div>
    </div>
  </Loading>
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
  data() {
    return {
      favoriteItem: [],
      isLoading: false,
      isLoadingMassege: '',
    };
  },
  provide() {
    return {
      favoriteItems: this.favoriteItem,
    };
  },
  mounted() {
    this.$bus.$on('add-favotite', (item) => {
      const index = this.favoriteItem.findIndex((x) => x.id === item.id);
      this.isLoading = true;
      if (index === -1) {
        this.isLoadingMassege = '加入最愛';
        this.favoriteItem.push(item);
      } else {
        this.isLoadingMassege = '移除最愛';
        this.favoriteItem.splice(index, 1);
      }
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      console.log(this.favoriteItem);
    });
  },
  components: {
    Header,
    UserNavbar,
    Foot,
  },
};
</script>
