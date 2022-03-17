<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
  <div class="container-fluid">
    <div class="collapse navbar-collapse align-items-center justify-content-center" id="navbarNav">
      <ul class="navbar-nav my-3">
        <li class="nav-item mx-4">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <div class="container">
      <div class="row">
          <div class="col-3">
            <ul class="list">
              <li><a href="#" @click.prevent="productList('all')">查看 - 所有</a></li>
              <li><a href="#" @click.prevent="productList('寵物用具')">寵物 - 用品</a></li>
              <li><a href="#" @click.prevent="productList('寵物食品')">寵物 - 食品</a></li>
              <li><a href="#" @click.prevent="productList('寵物玩具')">寵物 - 玩具</a></li>
            </ul>
          </div>
          <div class="col-9">
              <div class="row">
                  <div class="col-4 mb-2"  v-for="item in listProducts" :key="item.id">
                    <a href="#" @click.prevent="goProduct(item.id)"
                    style="text-decoration:none; color:#000">
                      <div class="card">
                        <img src="" class="card-img-top madel" alt="">
                        <div class="card-body p-3">
                          <div class="d-flex align-items-center card-title">
                            <b>{{ item.title }}</b>
                            <button
                            class="btn btn-outline-danger p-0 px-1 ms-auto"
                            type="button"
                            @click.prevent.stop="addCart(item.id, true)"
                            :disabled="this.status.loadingItem === item.id">
                              <div
                              class="spinner-border text-danger spinner-border-sm"
                              role="status"
                              v-if="this.status.loadingItem === item.id">
                                <span class="visually-hidden">Loading...</span>
                              </div>
                              <span v-else>
                                <i class="bi bi-cart4"></i>
                              </span>
                             </button>
                          </div>
                          <div class="d-flex justify-content-between align-items-center">
                            <p class="origin-price fw-light mb-0">{{ item.origin_price }}</p>
                            <p class="price fw-bold mb-0">${{ item.price }}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
              </div>
          </div>
      </div>
  </div>
    <div class="cart_group">
    <button
      class="btn btn-outline-info rounded-pill fs-2"
      @click.prevent="showCart()">
      <i class="bi bi-cart4"></i>
    </button>
    <div class="p-3" v-if="cartActive">
      <table class="table align-middle caption-top">
        <thead>
          <tr>
            <th class="col-1"></th>
            <th class="col">項目</th>
            <th class="col-2">數量</th>
            <th class="col-3">單價</th>
          </tr>
        </thead>
        <tbody v-for="item in cartProducts.carts" :key="item.id">
          <tr>
            <td>
              <button class="btn p-0" @click.prevent="delCart(item.id)">
               <i class="bi bi-x-circle"></i>
              </button>
            </td>
            <td>{{item.product.title}}</td>
            <td align="rigth">
              <input
              type="number"
              class="form-control form-control-sm p-1"
              id="count"
              min="1"
              @change="addCart(item.id, false, item.qty)"
              :disabled="item.id === status.loadingItem"
              v-model.number="item.qty">
            </td>
            <td>{{ item.final_total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" align="right">原價：</td>
            <td colspan="1">{{ cartProducts.total }}</td>
          </tr>
          <tr>
            <td colspan="3" align="right">總金額：</td>
            <td colspan="1">{{ cartProducts.final_total }}</td>
          </tr>
        </tfoot>
      </table>
      <div class="input-group d-flex">
        <input
        class="form-control form-control-sm p-1"
        type="text"
        v-model="coupon_code"
        placeholder="請填寫優惠卷碼">
        <button
        class="btn btn-outline-danger"
        type="button"
        @click="addCouponCode"
        >使用優惠卷</button>
      </div>
    </div>
  </div>
</template>
<style>
  .origin-price {
      font-size: 14px;
      color: cadetblue;
      text-decoration: line-through;
  }
  .list > li  {
    list-style: none;
    margin: 18px;
  }
  .list > li > a{
    padding: 10px;
    font-size: 18px;
    text-decoration: none;
    color: rgb(153, 153, 153);
  }
  .list > li > a:hover{
    color: black;
  }
  /* 購物車 */
  .cart_group > button {
    position: fixed;
    right: 10px;
    bottom: 10px;
  }
  .cart_group > div {
    position: fixed;
    right: 50px;
    bottom: 90px;
    box-shadow: -3px 3px 4px rgba(255, 116, 24, 0.082);
    background-color: #fff;
  }
  .cart_group > div > table {
    width: 500px;
  }
</style>

<script>
export default {
  data() {
    return {
      products: [],
      pagination: {},
      listProducts: [],
      cartProducts: [],
      cartActive: false,
      status: {
        loadingItem: '',
      },
      coupon_code: '',
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(api).then((res) => {
        this.products = res.data.products;
        this.listProducts = this.products;
      });
    },
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api)
        .then((res) => {
          this.cartProducts = res.data.data;
          console.log(this.cartProducts);
        });
    },
    goProduct(id) {
      this.$router.push(`product/${id}`);
    },
    productList(category) {
      this.listProducts = (category === 'all' ? this.products : this.products.filter((x) => x.category === category));
    },
    addCart(id, isNew, count = 1) {
      // 新增購物車
      let cartMethods = 'post';
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      // 編輯購物車
      if (!isNew) {
        cartMethods = 'put';
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      }
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: count,
      };
      this.$http[cartMethods](api, { data: cart })
        .then(() => {
          this.status.loadingItem = '';
          this.getCart();
        });
    },
    delCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(api)
        .then((res) => {
          this.getCart();
          console.log(res.data);
        });
    },
    showCart() {
      this.cartActive = !this.cartActive;
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(api, { data: coupon })
        .then((res) => {
          console.log(res);
          this.getCart();
        });
    },
  },
  created() {
    this.getProduct();
    this.getCart();
  },
};
</script>
