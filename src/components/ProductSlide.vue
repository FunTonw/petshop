<template>
  <Loading :active="isGetLoading"  :is-full-page="true">
    <div>
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </Loading>
    <Loading :active="isLoading"  :is-full-page="true">
    <div>
      <div class="card">
        <div class="card-body text-center fs-1 fw-bold text-secondary m-3">
            <p><i class="bi bi-check2-square"></i></p>
            <p>{{ isLoadingMassege }}</p>
        </div>
      </div>
    </div>
  </Loading>
  <VueEasyLightbox
  escDisabled
  moveDisabled
  :visible="lightbox.visible"
  @hide="handleHide"
  :imgs="lightbox.imgs"
  ></VueEasyLightbox>
<div class="container">
  <div class="mb-2 d-flex justify-content-center">
   <button type="button" class="me-2 product-button-prev btn btn-outline-secondary">
     <i class="bi bi-caret-left-fill"></i>
   </button>
   <button type="button" class="product-button-next btn btn-outline-secondary">
     <i class="bi bi-caret-right-fill"></i>
   </button>
  </div>
<div>
<div class="swiper" id="productswiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide" v-for="item, key in listCategory" :key="key">
      <div class="card">
            <a href="#"
            class="card-link"
            style="height: 180px"
            @click.prevent="goProduct(item.id)">
              <img class="card-img-top" :src="item.imageUrl" :alt="item.title">
            </a>
          <div class="card-body">
            <div class="button-item">
              <button class="btn m-1" @click.prevent="addFavorite(item)">
                <i class="bi bi-heart-fill"></i>
              </button>
              <button class="btn m-1" @click.prevent="showImg(item.imageUrl)">
                <i class="bi bi-zoom-in"></i>
              </button>
            </div>
            <div class="card-title">
              <h6 class="m-0 fs-5 fw-bold text-center">{{ item.title }}</h6>
            </div>
              <div class="
              d-flex flex-column flex-lg-row
              justify-content-between
              align-items-center">
                <p class="fs-6 m-0 me-1 text-decoration-line-through">
                  ${{ $filters.currency(item.origin_price) }}
                </p>
                <p class="m-0 fs-4 text-danger"
                style="font-weight: 700;">${{ $filters.currency(item.price) }}</p>
              </div>
             <div>
                <button class="btn btn-outline-danger fs-6 w-100" @click="addCart(item)">
                  <div
                  class="spinner-border text-danger spinner-border-sm"
                  role="status"
                  v-if="this.status.loadingItem === item.id">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div v-else>
                  <i class="bi bi-cart-plus"></i>
                  <span>加入購物車</span>
                  </div>
                </button>
              </div>
          </div>
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
   top: 0;
   height: 100%;
   width: 100%;
   background-color: rgba(255, 255, 255, 0.3);
   opacity: 0;
   position: absolute;
 }
 .card:hover .card-link::before{
   opacity: 1;
 }
 .button-item button{
    background-color:#666699;
    color: #FFF;
 }
  .button-item button:hover{
   background-color:#FF9999;
   color: #666699;
 }
 /* 手機裝置該有的 */
 @media screen and (max-width: 835px){
    .button-item{
      position: static;
      transform: none;
      opacity: 1;
    }
 }
 /* 手機裝置不該有的 */
@media screen and (min-width: 835px){
    .button-item{
      position: absolute;
      top: 50%;
      left: 50%;
      transform:translate(-50%,-100%);
      opacity: 0;
    }
    .card:hover .button-item{
      transform:translate(-50%,-80%);
      opacity: 1;
      transition: all 0.3s ease-out;
    }
 }
</style>

<script>
import VueEasyLightbox from 'vue-easy-lightbox';
import Swiper, { Grid, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

export default {
  components: [
    VueEasyLightbox,
  ],
  data() {
    return {
      tsetText: '1',
      listItems: [],
      listCategory: [],
      cartCount: 0,
      status: {
        loadingItem: '',
      },
      isGetLoading: false,
      isLoading: false,
      isLoadingMassege: '',
      lightbox: {
        imgs: '',
        visible: false,
      },
    };
  },
  // injects內容在 UserBoard.vue
  inject: [
    'favoriteItems',
  ],
  props: [
    'categoryli',
  ],
  methods: {
    getItems() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isGetLoading = true;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.isGetLoading = false;
            this.listItems = res.data.products;
            // 如果頁面是我的最愛,直接導入inject內容
            if (this.$route.path === '/user/favorite') {
              this.listCategory = this.favoriteItems;
            } else if (this.$route.path === '/user/home') {
              this.listCategory = this.listItems;
            }
          }
        });
    },
    goProduct(id) {
      this.$bus.$emit('createpage', id);
      this.$router.push(`/user/product/${id}`);
    },
    addCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = item.id;
      const dataInfo = {
        product_id: item.id,
        qty: 1,
      };
      this.$http.post(api, { data: dataInfo })
        .then((res) => {
          if (res.data.success) {
            this.status.loadingItem = '';
            this.isLoading = true;
            this.isLoadingMassege = res.data.message;
            this.getCart();
          }
        });
    },
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api)
        .then((res) => {
          const cartProducts = res.data.data.carts;
          let countQty = 0;
          cartProducts.forEach((ele) => {
            countQty += ele.qty;
          });
          this.cartCount = countQty;
        });
    },
    // 取得需加入最愛的item, mitt回傳UserNavbar.vue
    addFavorite(item) {
      this.$bus.$emit('add-favotite', item);
    },
    showImg(img) {
      this.lightbox.imgs = img;
      this.lightbox.visible = true;
    },
    handleHide() {
      this.lightbox.visible = false;
    },
  },
  // 取得cartsCount數量, mitt回傳至UserNavbar.vue
  watch: {
    cartCount() {
      this.$bus.$emit('getmitt', this.cartCount);
    },
    // isLoading() {
    //   setTimeout(() => { this.isLoading = false; }, 1500);
    // },
    categoryli() {
      if (this.categoryli === 'All') {
        this.listCategory = this.listItems;
      } else {
        this.listCategory = this.listItems.filter((x) => x.category === this.categoryli);
      }
    },
  },
  mounted() {
    return new Swiper('#productswiper', {
      modules: [Grid, Navigation, Pagination],
      slidesPerView: 2,
      spaceBetween: 30,
      observer: true,
      navigation: {
        nextEl: '.product-button-next',
        prevEl: '.product-button-prev',
      },
      grid: {
        rows: 2,
        fill: 'row',
      },
      breakpoints: {
        429: {
          slidesPerView: 3,
          spaceBetween: 20,
          observer: true,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
        835: {
          slidesPerView: 4,
          spaceBetween: 30,
          observer: true,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
      },
    });
  },
  created() {
    this.getItems();
  },
};
</script>
