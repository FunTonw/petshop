<template>
  <nav aria-label="breadcrumb" class="m-3 mb-0">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/user/cart">商品頁面</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">{{ item.title }}</li>
    </ol>
  </nav>
  <div class="body d-flex justify-content-center align-items-center">
    <img src="" alt="">
    <div class="warp">
      <h3>{{ item.title }}</h3>
      <p>{{ item.category }}</p>
      <div class="content">
        <p>{{ item.description }}</p>
        <p>{{ item.content }}</p>
      </div>
      <div class="d-flex justify-content-end btn-gp">
        <button class="btn btn-outline-danger">
          <i class="bi bi-heart-fill me-2"></i>Like</button>
        <button
          class="btn btn-outline-primary mx-2"
          @click.prevent="addCart(item.id, 1)"
          :disabled="this.status.loadingItem === item.id">
            <div
            class="spinner-border text-danger spinner-border-sm"
            role="status"
            v-if="this.status.loadingItem === item.id">
              <span class="visually-hidden">Loading...</span>
            </div>
          <i class="bi bi-cart4 me-2"></i>加入購物車</button>
      </div>
    </div>
  </div>
</template>
<style>
  .body{
    margin: 0 auto;
    height: 100vh;
  }
  .btn-gp > button{
    font-size: 13px;
  }
</style>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      item: {},
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    addCart(id, count = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: count,
      };
      this.$http.post(api, { data: cart })
        .then((res) => {
          this.status.loadingItem = '';
          console.log(res.data);
        });
    },
  },
  created() {
    const id = this.$route.params.productId;
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
    axios.get(api)
      .then((res) => {
        this.item = res.data.product;
        console.log(this.item);
      });
  },
};
</script>
