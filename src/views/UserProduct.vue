<template>
  <!-- <Loading :active="isLoading" /> -->
  <Loading :active="isLoading"  :is-full-page="true">
    <div v-if="isLoadingMassege === 'Loading'">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else>
      <div class="card">
        <div class="card-body text-center fs-1 fw-bold text-secondary m-3">
            <p><i class="bi bi-check2-square"></i></p>
            <p>{{ isLoadingMassege }}</p>
        </div>
      </div>
    </div>
  </Loading>
  <nav aria-label="breadcrumb" class="m-3 mb-0">
  </nav>
  <div class="container">
  <div class="row p-3 border border-1 border-pink rounded bg-white">
    <ol class="breadcrumb fw-bold">
      <li class="breadcrumb-item">
        <router-link to="/user/home" class="text-dark text-decoration-none">首頁</router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link to="/user/cart" class="text-dark text-decoration-none">商品頁面</router-link>
      </li>
      <li class="breadcrumb-item text-secondary active" aria-current="page">{{ item.title }}</li>
    </ol>
    <div class="col-md-5 col-12 mb-md-0 mb-2">
      <img :src="item.imageUrl" alt="" class="w-100">
    </div>
    <div class="col-md-7 col-12 d-flex flex-column justify-content-end">
      <!-- 產品內容 -->
      <div class="content fw-bold">
        <h3 class="fw-bold">{{ item.title }}</h3>
        <div class="text-secondary">
          <p>產品類別：{{ item.category }}</p>
        </div>
        <div>
          <span class="fs-4 me-2">NT:${{item.price}}</span>
          <span class="fs-5 text-secondary text-decoration-line-through">
            NT:${{item.origin_price}}
          </span>
        </div>
        <hr>
        <pre class="text-secondary">{{ item.content }}</pre>
      </div>
      <!-- 按鈕 -->
      <div class="row">
        <!-- qtybtn -->
        <div class="input-qty border border-1 rounded p-0
        d-flex align-items-center justify-content-between col-md-6 col-12">
          <button @click.prevent="qtySelete('dash')"
          class="border-0 rounded-start fs-4 qty-button" v-if="qty">
            <i class="bi bi-dash"></i>
          </button>
          <button class="border-0 rounded-start fs-4 qty-button-disabled" v-else disabled>
            <i class="bi bi-dash"></i>
          </button>
          <span class="px-5">{{qty}}</span>
          <button @click.prevent="qtySelete('plus')"
          class="border-0 rounded-end fs-4 qty-button">
            <i class="bi bi-plus"></i>
          </button>
        </div>
        <div class="col-md-6 col-12 px-md-2 px-0 mt-md-0 mt-2">
        <button
          class="btn btn-outline-primary w-100"
          @click.prevent="addCart(item.id, 1)"
          :disabled="this.status.loadingItem === item.id">
            <div
            class="spinner-border text-danger spinner-border-sm"
            role="status"
            v-if="this.status.loadingItem === item.id">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div v-else>
              <i class="bi bi-cart4 me-2"></i>加入購物車
            </div>
        </button>
        </div>
      </div>
    </div>
    <div class="col-12 mt-5">
      <ul class="nav nav-tabs fw-bolder" ref="decorationList">
        <li class="nav-item">
          <a class="nav-link text-secondary active"
             href="#"
             data-decoration='introduction'
             @click.prevent="decorationSwitchBtn('introduction')">
             產品介紹
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary"
             href="#"
             data-decoration='save'
             @click.prevent="decorationSwitchBtn('save')">
             保存方式
          </a>
        </li>
      </ul>
      <div class="mt-3 fw-bolder text-secondary" v-if="decorationSwitch === 'introduction'">
        <p class="text-dark fs-5">產品介紹</p>
        <p>{{item.description}}</p>
        <p class="text-dark fs-5">詳細內容</p>
        <pre>{{item.content}}</pre>
      </div>
      <div class="mt-3 fw-bolder lh-lg text-secondary" v-else>
        <ul class="p-0">
          <li>開封後請立即食用。</li>
          <li>開封前、後若未食用完畢，請於一小時內保存至冷藏或冷凍。</li>
          <li>冷藏可保存一星期，冷凍可保存三個月。</li>
        </ul>
      </div>
    </div>
    <div class="col-12 mt-5">
      <h3 class="text-center">你可能會喜歡</h3>
      <ProductSlide :categoryli='item.category' :itemid='item.id'/>
    </div>
  </div>
  </div>
</template>
<style>
  .btn-gp > button{
    font-size: 13px;
  }
  .input-qty button{
    color: #fff;
    background-color: #666699;
    height: 100%;
  }
  .input-qty .qty-button:hover{
    background-color: #FF9999;
  }
  .qty-button-disabled{
    background-color: #666699c8 !important
  }
</style>
<script>
import axios from 'axios';
import ProductSlide from '../components/ProductSlide.vue';

export default {
  components: {
    ProductSlide,
  },
  data() {
    return {
      decorationSwitch: 'introduction',
      qty: 1,
      item: {},
      status: {
        loadingItem: '',
      },
      isLoading: false,
      isLoadingMassege: '',
    };
  },
  methods: {
    getProduct(id = this.$route.params.productId) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      axios.get(api)
        .then((res) => {
          this.isLoadingMassege = 'Loading';
          this.item = res.data.product;
        });
    },
    addCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: this.qty,
      };
      this.$http.post(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.status.loadingItem = '';
            this.isLoadingMassege = res.data.message;
            console.log(res.data);
          } else {
            console.log(res.data);
          }
        });
    },
    qtySelete(plusDash) {
      if (plusDash === 'plus') {
        this.qty += 1;
      } else {
        this.qty -= 1;
      }
      // (plusDash === 'plus' ? this.qty += 1 : (this.qty -= 1))();
    },
    decorationSwitchBtn(type) {
      this.decorationSwitch = type;
      const decorationLi = this.$refs.decorationList.childNodes;
      decorationLi.forEach((ele) => {
        if (ele.children[0].dataset.decoration === type) {
          ele.children[0].classList.add('active');
        } else {
          ele.children[0].classList.remove('active');
        }
      });
    },
  },
  watch: {
    isLoadingMassege() {
      if (this.isLoadingMassege) {
        this.isLoading = true;
        setTimeout(() => { this.isLoading = false; this.isLoadingMassege = ''; }, 1000);
      }
    },
  },
  mounted() {
    this.$bus.$on('createpage', (id) => {
      this.getProduct(id);
    });
  },
  created() {
    this.getProduct();
  },
};
</script>
