<template>
  <div>
    <Banner/>
    <div class="container">
      <PromoItem/>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import PromoItem from '../components/PromoItem.vue';

export default {
  components: {
    Banner,
    PromoItem,
  },
};
</script>
