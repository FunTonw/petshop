<template>
  <div class="container">
    <div>
      <h2>推薦商品</h2>
    </div>
    <ul class="d-flex justify-content-center fs-5 category-list text-decoration-none p-0">
      <li class="m-2">
        <a href="#">CAKE</a>
      </li>
      <li class="m-2">
        <a href="#">BREAD</a>
      </li>
      <li class="m-2">
        <a href="#">PIE</a>
      </li>
    </ul>
    <div>
      <div class="swiper">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="card h-100">
              <div class="card-group">
                <a href="#" class="card-link">
                  <img src="../assets/img/pexels-cats-coming-1543800.jpg" alt="">
                </a>
                <div class="card-body">
                  <div class="button-item">
                    <button class="btn m-1"><i class="bi bi-heart-fill"></i></button>
                    <button class="btn m-1"><i class="bi bi-zoom-in"></i></button>
                  </div>
                  <div class="
                  card-title
                  d-flex
                  flex-column flex-lg-row
                  align-items-lg-center
                  justify-content-lg-between
                  m-0 mb-lg-2">
                    <h6 class="m-0" style="font-weight: 600;">黑森林公爵</h6>
                    <p class="m-0 text-warning fs-6">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </p>
                  </div>
                  <div class="
                  card-text
                  d-flex
                  flex-column flex-lg-row
                  justify-content-center justify-content-lg-between
                  align-items-center align-items-lg-end">
                    <div class="price d-flex">
                      <p class="fs-6 m-0 me-1 text-decoration-line-through">$100</p>
                      <p  class="m-0 fw-blod text-danger">$200</p>
                    </div>
                    <div>
                      <button class="cart-btn btn fs-6 p-0 px-3">
                        <i class="bi bi-cart-plus"></i> Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card">
              <a href="#">
              <div class="card-group">
                <img src="../assets/img/pexels-cats-coming-1543800.jpg" alt="">
                <div class="card-body">
                  <div class="card-title">title</div>
                  <div class="card-text">內容</div>
                </div>
              </div>
               </a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card">
              <a href="#">
              <div class="card-group">
                <img src="../assets/img/pexels-cats-coming-1543800.jpg" alt="">
                <div class="card-body">
                  <div class="card-title">title</div>
                  <div class="card-text">內容</div>
                </div>
              </div>
               </a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card">
              <a href="#">
              <div class="card-group">
                <img src="../assets/img/pexels-cats-coming-1543800.jpg" alt="">
                <div class="card-body">
                  <div class="card-title">title</div>
                  <div class="card-text">內容</div>
                </div>
              </div>
               </a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card">
              <a href="#">
              <div class="card-group">
                <img src="../assets/img/pexels-cats-coming-1543800.jpg" alt="">
                <div class="card-body">
                  <div class="card-title">title</div>
                  <div class="card-text">內容</div>
                </div>
              </div>
               </a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card">
              <a href="#">
              <div class="card-group">
                <img src="../assets/img/pexels-cats-coming-1543800.jpg" alt="">
                <div class="card-body">
                  <div class="card-title">title</div>
                  <div class="card-text">內容</div>
                </div>
              </div>
               </a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card">
              <a href="#">
              <div class="card-group">
                <img src="../assets/img/pexels-cats-coming-1543800.jpg" alt="">
                <div class="card-body">
                  <div class="card-title">title</div>
                  <div class="card-text">內容</div>
                </div>
              </div>
               </a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card">
              <a href="#">
              <div class="card-group">
                <img src="../assets/img/pexels-cats-coming-1543800.jpg" alt="">
                <div class="card-body">
                  <div class="card-title">title</div>
                  <div class="card-text">內容</div>
                </div>
              </div>
               </a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card">
              <a href="#">
              <div class="card-group">
                <img src="../assets/img/pexels-cats-coming-1543800.jpg" alt="">
                <div class="card-body">
                  <div class="card-title">title</div>
                  <div class="card-text">內容</div>
                </div>
              </div>
               </a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card">
              <a href="#">
              <div class="card-group">
                <img src="../assets/img/pexels-cats-coming-1543800.jpg" alt="">
                <div class="card-body">
                  <div class="card-title">title</div>
                  <div class="card-text">內容</div>
                </div>
              </div>
               </a>
            </div>
          </div>
        </div>
      </div>
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
.category-list > li > a{
  color: #666699;
  font-weight: 500;
  position: relative;
}
.category-list > li > a::before{
  content: "";
  width: 0%;
  height: 3px;
  bottom: -15%;
  background-color: #FF9999;
  position: absolute;
}
.category-list > li > a:hover{
  color: #FF9999;
}
.category-list > li > a:hover::before{
  width: 100%;
  transition: all .3s ease-in-out;
}

.card{
   background-color:aliceblue;
 }
 .card > a{
   text-decoration: none;
   color: #000;
   position: relative;
 }
 .card-link::before{
   content: "";
   left: 0;
   height: 68%;
   width: 100%;
   background-color: rgba(255, 255, 255, 0.3);
   opacity: 0;
   position: absolute;
 }
 .card:hover .card-link::before{
   opacity: 1;
 }
 .card:hover .button-item{
   transform:translate(-50%,-50%);
   opacity: 1;
   transition: all 0.3s ease-out;
 }
 .button-item{
   position: absolute;
   top: 50%;
   left: 50%;
   transform:translate(-50%,-90%);
   opacity: 0;
 }
 .button-item button{
    background-color:#666699;
    color: #FFF;
 }
  .button-item button:hover{
   background-color:#FF9999;
   color: #666699;
 }
 @media screen and (max-width: 835px){
    .button-item{
      position: static;
      transform: none;
      opacity: 1;
    }
 }
 .cart-btn{
   background-color:#666699;
   color: #FFF;
 }
 .cart-btn:hover{
   background-color:#FF9999;
   color: #666699;
 }
</style>

<script>

// Import Swiper styles
import Swiper, { Grid, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

export default {
  data() {
    return {
      listProducts: [
        {
          category: '衣服2',
          content: '這是內容',
          description: 'Sit down please 名設計師設計',
          id: '-L9tH8jxVb2Ka_DYPwng',
          is_enabled: 1,
          origin_price: 100,
          price: 600,
          title: '[賣]動物園造型衣服3',
          unit: '個',
          num: 1,
        },
      ],
    };
  },
  methods: {
    Alink() {
      console.log('Alink');
    },
    BtnLink() {
      console.log('BtnLink');
    },
  },
  mounted() {
    return new Swiper('.swiper', {
      modules: [Grid, Navigation, Pagination],
      slidesPerView: 2,
      spaceBetween: 20,
      grid: {
        rows: 2,
        fill: 'row',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        429: {
          slidesPerView: 3,
          spaceBetween: 20,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
        835: {
          slidesPerView: 4,
          spaceBetween: 30,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
      },
    });
  },
};
</script>
