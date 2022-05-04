<template>
  <ProductSlide/>
  <div class="container" v-if="favoriteItems.length === 0">
      <div class="
      vh-100
      d-flex flex-column
      justify-content-center
      align-items-center
      fs-3 fw-bolder
      text-secondary">
        <h4 class="fs-1 fw-bolder">您還沒有商品加入最愛哦</h4>
        <p>趕快把這邊裝滿吧！！</p>
        <router-link to="/user/cart"
        class="btn btn-danger fs-3"
        >商品頁面</router-link>
        <p><i class="bi bi-hand-index"></i></p>
      </div>
  </div>
</template>

<script>

import ProductSlide from '../components/ProductSlide.vue';

export default {
  inject: [
    'favoriteItems',
  ],
  components: {
    ProductSlide,
  },
  created() {
    console.log(this.favoriteItems.lenght);
  },
};
</script>
