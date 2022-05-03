<template>
  <div class="container-0 py-5 mb-5" style="background-color:#666699;">
   <h3 class="text-center text-white fsadd">顧客回饋</h3>
   <div class="container">
     <div class="swiper" id="customer">
      <div class="swiper-pagination" id="customer-pagination"></div>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in Customers" :key="item.id">
          <div class="customer-card d-flex flex-column align-items-center py-3 text-white">
            <div class="mb-4">
              <img :src="item.pic" :alt="item.name">
            </div>
            <div class="lh-1">
              <p class="fs-5">{{ item.name }}</p>
              <p class="fs-6 mx-auto">{{ item.appellation }}</p>
              <pre class="fs-6 lh-lg">{{ item.say }}</pre>
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
          name: '尤寶村',
          appellation: '世界級烘焙師',
          say:
            `當你吃下每一口麵包時，你會感受到烘焙師正在用心搓揉著麵團的溫度。
產地直送且鮮美多汁的當地水果與帶著濃郁香氣的鮮奶油，
會在嘴裡舌尖不斷迂迴盤旋，有如置身熱帶天堂。`,
        },
        {
          id: '53453t3',
          pic: Lisaimg,
          name: '東邊的河馬',
          appellation: '日本第一烘焙師',
          say:
            `這邊的麵包，會讓我懷念起以前爺爺在為日本做出屬於日本麵包時那純粹的心境，
嘗的出那創新風味，卻融合傳統的技巧，將美與味兩者融合的恰到好處，
如果說台灣有沒有屬於的麵包，那這邊推薦大家來試試`,
        },
        {
          id: '56s8d65',
          pic: Judyimg,
          name: '麵包棍謝師傅',
          appellation: '中國第一麵點師',
          say:
            `當我吃到了好吃的甜點，我會為我的麵包棍上鑲上一顆星星記號，
當我吃上CAKEKING的甜點後，不得不說這顆星實至名歸，而且這顆星星非常特別
不但讓我吃出我從來沒有嘗過的味道，且更讓我了解原來點心的技術原來能更博大深淵`,
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
        el: '#customer-pagination',
        type: 'bullets',
      },
    });
  },
};
</script>
