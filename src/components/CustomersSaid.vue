<template>
  <div class="container-0">
<div class="swiper" id="customer">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="customer-bg">
            <p>ADAM</p>
            <p>CUSTOMER</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div>
            <p>BDAM</p>
            <p>CUSTOMER</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div>
            <p>ADANN</p>
            <p>CUSTOMER</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            </p>
          </div>
        </div>
      </div>
</div>
  </div>
</template>
<style>
  .customer-bg{
    background: #666699;
  }
</style>

<script>
import Swiper, { Grid, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

export default {
  data() {
    return {
      Customers: [],
    };
  },
  mounted() {
    return new Swiper('#customer', {
      modules: [Grid, Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 20,
    });
  },
};
</script>
