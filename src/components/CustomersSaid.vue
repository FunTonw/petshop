<template>
  <div class="container-0 py-5" style="background-color:#666699;">
   <h3 class="text-center text-white fsadd">顧客回饋</h3>
   <div class="container">
     <div class="swiper" id="customer">
      <div class="swiper-pagination"></div>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in Customers" :key="item.id">
          <div class="customer-card d-flex flex-column align-items-center py-3 text-white">
            <div class="mb-4">
              <img :src="item.pic" :alt="item.name">
            </div>
            <div class="lh-1">
              <p class="fs-5">{{ item.name }}</p>
              <p class="fs-6">{{ item.appellation }}</p>
              <p class="fs-6 lh-lg">
                {{ item.say }}
              </p>
            </div>
          </div>
        </div>
      </div>
     </div>
   </div>
  </div>
</template>
<style>
  .customer-card{
    background: #666699;
  }
  .customer-card > div >img {
    border-radius: 50%;
    max-width: 100%;
  }
</style>

<script>
import Swiper, { Grid, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import Adamimg from '../assets/img/customer/1-150x150.jpg';
import Lisaimg from '../assets/img/customer/2-150x150.jpg';
import Judyimg from '../assets/img/customer/3-150x150.jpg';

export default {
  data() {
    return {
      Customers: [
        {
          id: '5195192',
          pic: Adamimg,
          name: 'ADAM',
          appellation: 'CUSTOMER',
          say:
            `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.`,
        },
        {
          id: '53453t3',
          pic: Lisaimg,
          name: 'LISA',
          appellation: 'CUSTOMER',
          say:
            `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.`,
        },
        {
          id: '56s8d65',
          pic: Judyimg,
          name: 'Judy',
          appellation: 'CUSTOMER',
          say:
            `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, tenetur.`,
        },
      ],
    };
  },
  mounted() {
    return new Swiper('#customer', {
      modules: [Grid, Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
  },
};
</script>
