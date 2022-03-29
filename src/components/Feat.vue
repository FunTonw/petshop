<template>
  <div class="container">
      <h2>合作公司</h2>
    <div class="mt-5 feat-swiper">
      <div class="d-flex justify-content-end fs-3 feat-btn">
        <div class="mx-2" id="feat-prev"><i class="bi bi-arrow-left-square-fill"></i></div>
        <div id="feat-next"><i class="bi bi-arrow-right-square-fill"></i></div>
      </div>
    <div class="swiper" id="feat">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
              <div class="feat-img">
                <img src="../assets/img/feat/1-80x80.png" alt="">
              </div>
          </div>
          <div class="swiper-slide">
              <div class="feat-img">
                <img src="../assets/img/feat/2-80x80.png" alt="">
              </div>
          </div>
          <div class="swiper-slide">
              <div class="feat-img">
                <img src="../assets/img/feat/3-80x80.png" alt="">
              </div>
          </div>
          <div class="swiper-slide">
              <div class="feat-img">
                <img src="../assets/img/feat/4-80x80.png" alt="">
              </div>
          </div>
          <div class="swiper-slide">
              <div class="feat-img">
                <img src="../assets/img/feat/5-80x80.png" alt="">
              </div>
          </div>
           <div class="swiper-slide">
              <div class="feat-img">
                <img src="../assets/img/feat/5-80x80.png" alt="">
              </div>
          </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style>
  .feat-swiper .swiper{
    background:rgb(228, 228, 228);
  }
   .feat-swiper .swiper .swiper-slide{
    background:rgb(228, 228, 228);
  }
  .feat-img img{
      width: 80px;
      margin: 20px auto;
  }
</style>

<script>
import Swiper, { Grid, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

export default {
  mounted() {
    return new Swiper('#feat', {
      modules: [Grid, Navigation, Pagination],
      slidesPerView: 2,
      navigation: {
        nextEl: '#feat-next',
        prevEl: '#feat-prev',
      },
      breakpoints: {
        429: {
          slidesPerView: 4,
        },
        835: {
          slidesPerView: 6,
        },
      },
    });
  },
};
</script>
