<template>
  <Loading :active="isLoading"  :is-full-page="true">
    <div v-if="isLoadingMassege === 'Loading'">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="isLoadingMassege">
      <div class="card">
        <div class="card-body text-center fs-1 fw-bold text-secondary m-3">
            <p><i class="bi bi-check2-square"></i></p>
            <p>{{ isLoadingMassege }}</p>
        </div>
      </div>
    </div>
  </Loading>
  <div class="container">
      <h2>推薦商品</h2>
    <ul class="d-flex justify-content-center fs-5 category-list text-decoration-none p-0 mt-4">
      <li class="m-2">
        <a href="#" @click.prevent="changeCategory('All')">ALL</a>
      </li>
      <li class="m-2">
        <a href="#" @click.prevent="changeCategory('蛋糕')">CAKE</a>
      </li>
      <li class="m-2">
        <a href="#" @click.prevent="changeCategory('麵包')">BREAD</a>
      </li>
      <li class="m-2">
        <a href="#" @click.prevent="changeCategory('派餅')">PIE</a>
      </li>
    </ul>
    <div>
      <div class="swiper" id="productswiper">
        <div class="swiper-button-prev" id="product-prev"></div>
        <div class="swiper-button-next" id="product-next"></div>
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item, key in this.listCategory" :key="key">
            <div class="card">
                  <a href="#"
                  class="card-link"
                  style="height: 180px"
                  @click.prevent="goProduct(item.id)">
                    <img class="card-img-top" :src="item.imageUrl" :alt="item.title">
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
                    <h6 class="m-0" style="font-weight: 600;">{{ item.title }}</h6>
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
                      <p class="fs-6 m-0 me-1 text-decoration-line-through">
                        ${{ $filters.currency(item.origin_price) }}
                      </p>
                      <p  class="m-0 fw-blod text-danger">${{ $filters.currency(item.price) }}</p>
                    </div>
                    <div>
                      <button class="cart-btn btn fs-6 p-0 px-3" @click="addCart(item)">
                        <div
                        class="spinner-border text-danger spinner-border-sm"
                        role="status"
                        v-if="this.status.loadingItem === item.id">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div v-else>
                        <i class="bi bi-cart-plus"></i>
                        <span>Add</span>
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
   height: 100%;
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
import Swiper, { Grid, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

export default {
  data() {
    return {
      tsetText: '1',
      listItems: [],
      listCategory: [],
      cartCount: 0,
      status: {
        loadingItem: '',
      },
      isLoading: false,
      isLoadingMassege: '',
    };
  },
  methods: {
    getItems() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoadingMassege = 'Loading';
            this.listItems = res.data.products;
            this.listCategory = this.listItems;
          }
        });
    },
    changeCategory(category) {
      if (category === 'All') {
        this.listCategory = this.listItems;
      } else {
        this.listCategory = this.listItems.filter((x) => x.category === category);
      }
    },
    goProduct(id) {
      this.$router.push(`product/${id}`);
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
  },
  // 取得cartsCount數量, mitt回傳至UserNavbar.vue
  watch: {
    cartCount() {
      this.$bus.$emit('getmitt', this.cartCount);
    },
    isLoadingMassege() {
      if (this.isLoadingMassege) {
        this.isLoading = true;
        setTimeout(() => { this.isLoading = false; this.isLoadingMassege = ''; }, 1500);
      }
    },
  },
  mounted() {
    return new Swiper('#productswiper', {
      modules: [Grid, Navigation, Pagination],
      slidesPerView: 2,
      spaceBetween: 20,
      grid: {
        rows: 2,
        fill: 'row',
      },
      navigation: {
        nextEl: '#product-next',
        prevEl: '#product-prev',
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
  created() {
    this.getItems();
  },
};
</script>
