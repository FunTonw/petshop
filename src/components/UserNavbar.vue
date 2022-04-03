<template>
  <nav class="
  nav-text
  shadow-sm
  p-md-4 p-0
  bg-light">
    <div class="container-fluid">
      <div class="d-flex align-items-center justify-content-around w-100">
        <a href="#" class="navbar-brand"><img src="../assets/img/logo.png" alt=""></a>
          <ul class="
          d-flex
          flex-md-row flex-column
          mx-auto
          my-0
          p-0
          nav-list
          user-nav-list
          bg-light
          under-line"
          ref="navList">
            <li class="px-auto py-1 me-md-4 me-0 text-center d-block">
              <a href="#">Home</a>
            </li>
            <li class="py-1 me-md-4 me-0 text-center d-block">
              <a href="#">About Us</a>
            </li>
            <li class="py-1 me-md-4 me-0 text-center d-block">
              <a href="#">Product</a>
            </li>
            <li class="py-1 me-md-4 me-0 text-center d-block ">
              <a href="#">Shop</a>
            </li>
          </ul>
        <ul class="d-flex nav-list m-0">
          <li><a href="#">
            <div class="cart-icon">
              <i class="bi bi-cart4 fs-4 me-3"></i>
              <span>{{ cartCount }}</span>
            </div>
            </a></li>
          <li><a href="#"><i class="bi bi-person-circle fs-4 me-3"></i></a></li>
          <li>
            <a href="#" class="nav-ham" @click.prevent="listActive()">
              <i class="bi bi-list fs-4"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style>
  .nav-list > li > a{
    color: rgba(65, 65, 65, 0.7);
    font-weight: 600;
    position: relative;
  }
  .nav-list > li > a:hover{
    color: rgb(27, 27, 27);
  }
  .under-line > li > a::before{
    content: '';
    position: absolute;
    border-bottom: 4px solid #FF9999;
    bottom: -4px;
    left: 0;
    width: 0%;
    transition: .3s ease-in-out;
  }
  .under-line > li > a:hover::before{
    width: 100%;
  }
  .nav-ham{
    display: none;
  }
  @media screen and (max-width: 429px) {
    .nav-ham{
      display: block;
    }
    .nav{
      position: relative;
    }
    .user-nav-list{
      position: absolute;
      width: 100%;
      background: #fff;
      transform: translateY(0%);
      display: block;
      opacity: 0;
      z-index: -1;
      transition: all .2s linear;
    }
    /* .user-nav-list > li{
      height: 0;
    } */
    .list-active {
      /* transition: all .5 linear;
      height: 100% !important */
      transition: all .2s linear;
      transform: translateY(80%);
      opacity: 1;
      z-index: 1;
    }
   }
  .cart-icon{
    position: relative;
  }
  .cart-icon span{
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(60%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #FF9999;
    text-align: center;
    font-size: 14px;
    color: #fff;
  }
</style>

<script>
export default {
  data() {
    return {
      getText: '',
      listActiveSwitch: true,
      cartCount: 0,
    };
  },
  methods: {
    listActive() {
      this.listActiveSwitch = !this.listActiveSwitch;
      if (!this.listActiveSwitch) {
        this.$refs.navList.classList.add('list-active');
      } else {
        this.$refs.navList.classList.remove('list-active');
      }
    },
    // 取得cartsCount總數
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
  created() {
    this.getCart();
  },
  mounted() {
    // 從TopProduct.vue接回的cartsCount
    this.$bus.$on('getmitt', (msg) => {
      this.cartCount = msg;
    });
  },
};
</script>
