<template>
  <div>
    <Banner/>
    <div class="container">
      <PromoItem/>
      <TopProduct/>
    </div>
    <CouponBanner/>
    <BannerItem/>
    <CustomersSaid/>
    <Feat/>
  </div>
</template>

<script>
import Banner from '../components/banner.vue';
import PromoItem from '../components/PromoItem.vue';
import TopProduct from '../components/TopProduct.vue';
import CouponBanner from '../components/CouponBanner.vue';
import BannerItem from '../components/BannerItem.vue';
import CustomersSaid from '../components/CustomersSaid.vue';
import Feat from '../components/Feat.vue';

export default {
  components: {
    Banner,
    PromoItem,
    TopProduct,
    CouponBanner,
    BannerItem,
    CustomersSaid,
    Feat,
  },
};
</script>
