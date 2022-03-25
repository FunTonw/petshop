<template>
  <div>
    <Banner/>
    <div class="container">
      <PromoItem/>
      <TopProduct class="mb-5"/>
    </div>
    <CouponBanner/>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import PromoItem from '../components/PromoItem.vue';
import TopProduct from '../components/TopProduct.vue';
import CouponBanner from '../components/CouponBanner.vue';

export default {
  components: {
    Banner,
    PromoItem,
    TopProduct,
    CouponBanner,
  },
};
</script>
