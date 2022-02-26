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
        <button class="btn btn-outline-danger">Like</button>
        <button class="btn btn-outline-primary mx-2">加入購物車</button>
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
    font-size: 10px;
  }
</style>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      item: {},
    };
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
