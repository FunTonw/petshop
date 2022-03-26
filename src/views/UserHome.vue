<template>
  <div>
    <Banner/>
    <div class="container">
      <PromoItem/>
      <TopProduct class="mb-5"/>
    </div>
    <CouponBanner/>
    <BannerItem/>
    <CustomersSaid/>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import PromoItem from '../components/PromoItem.vue';
import TopProduct from '../components/TopProduct.vue';
import CouponBanner from '../components/CouponBanner.vue';
import BannerItem from '../components/BannerItem.vue';
import CustomersSaid from '../components/CustomersSaid.vue';

export default {
  components: {
    Banner,
    PromoItem,
    TopProduct,
    CouponBanner,
    BannerItem,
    CustomersSaid,
  },
};
</script>
