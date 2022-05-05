<template>
  <div class="container mb-5">
      <h2>推薦商品</h2>
    <ul class="d-flex justify-content-center fs-5 category-list text-decoration-none p-0 mt-4">
      <li class="m-2">
        <a href="#" @click.prevent="changeCategory('All')">所有商品</a>
      </li>
      <li class="m-2">
        <a href="#" @click.prevent="changeCategory('蛋糕')">蛋糕</a>
      </li>
      <li class="m-2">
        <a href="#" @click.prevent="changeCategory('麵包')">麵包</a>
      </li>
      <li class="m-2">
        <a href="#" @click.prevent="changeCategory('派餅')">派餅</a>
      </li>
    </ul>
    <div>
      <ProductSlide :categoryli='category'>
      </ProductSlide>
    </div>
  </div>
</template>

<style>
h2{
  color: #666699;
  display: inline;
  position: relative;
}
h2::before{
  content: "";
  position: absolute;
  width: 80%;
  height: 2px;
  background-color: #FF9999;
  bottom: -40%;
}
</style>

<script>
import ProductSlide from './ProductSlide.vue';

export default {
  components: { ProductSlide },
  data() {
    return {
      category: '',
    };
  },
  methods: {
    changeCategory(ele) {
      this.category = ele;
      console.log(this.category);
    },
  },
};
</script>
