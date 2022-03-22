<template>
  <div>
    <Banner/>
    <div class="container">
      <PromoItem/>
      <TopProduct/>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import PromoItem from '../components/PromoItem.vue';
import TopProduct from '../components/TopProduct.vue';

export default {
  components: {
    Banner,
    PromoItem,
    TopProduct,
  },
};
</script>
