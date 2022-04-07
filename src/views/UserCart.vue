<template>
  <div class="container mt-3">
      <div class="row">
          <div class="col-12 col-md-3">
            <ul class="list row pe-md-5" ref="list">
              <li class="col-6 col-md-12">
                <a class="d-block py-0 py-md-2 cart-list-active"
                  href="#"
                  @click.prevent="productList('all')"
                  data-list="all">
                  所有 - ALL
                </a>
              </li>
              <li class="col-6 col-md-12">
                <a class="d-block py-0 py-md-2"
                   href="#"
                   @click.prevent="productList('蛋糕')"
                   data-list="蛋糕">
                  蛋糕 - CAKE
                </a>
              </li>
              <li class="col-6 col-md-12">
                <a class="d-block py-0 py-md-2"
                   href="#"
                   @click.prevent="productList('派餅')"
                   data-list="派餅">
                  派餅 - PIE
                </a>
              </li>
              <li class="col-6 col-md-12">
                <a class="d-block py-0 py-md-2"
                   href="#"
                   @click.prevent="productList('麵包')"
                   data-list="麵包">
                  麵包 - BREAD
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-9">
              <div class="row">
                  <div class="col-6 col-md-4 mb-2"  v-for="item in listProducts" :key="item.id">
                    <a href="#" @click.prevent="goProduct(item.id)"
                    style="text-decoration:none; color:#000">
                      <div class="card h-100">
                          <img :src="item.imageUrl" class="card-img-top madel h-100" alt="">
                        <div class="card-body p-3">
                          <div class="d-flex align-items-center card-title">
                            <b class="user-cart-title">{{ item.title }}</b>
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
    <!-- 購物車 -->
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
            <th class="col-3">價格</th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="item in cartProducts.carts" :key="item.id">
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
    font-size: 18px;
    text-decoration: none;
    color: #666699;
    border-bottom: 2px solid rgba(255, 255, 255, 0);
    position: relative;
    font-weight: bold;
  }
  .list > li > a::before{
    position: absolute;
    content: "";
    height: 100%;
    width: 0%;
    border-bottom: 2px solid #666699;
  }
  .list > li > a:hover{
    color: #666699;
  }
  .list > li > a:hover::before{
    width: 100%;
    transition: all .5s;
  }
  .user-cart-title{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .cart-list-active{
    background-color: #666699;
    color: #fff !important
  }
  @media screen and (max-width: 992px) {
    .list > li > a{
      font-size: 10px;
    }
    .list > li{
      margin: auto 0;
      padding: 10px 0px;
    }
  }
    @media screen and (max-width: 576px) {
    .list > li{
      margin: auto 0;
      text-align: center;
    }
    .list{
      padding: 0;
    }
    .list > li > a{
      font-size: 16px;
    }
    .list > li > a::before{
      content: none;
    }
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
  .cart_group > div {
    overflow: auto;
    max-height: 80%;
    max-width: 90%;
  }
</style>

<script>
export default {
  data() {
    return {
      listcetegory: 'all',
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
      this.listcetegory = category;
      this.$refs.list.childNodes.forEach((ele) => {
        if (ele.firstChild.dataset.list === category) {
          ele.firstChild.classList.add('cart-list-active');
        } else {
          ele.firstChild.classList.remove('cart-list-active');
        }
      });
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
        .then(() => {
          this.getCart();
        });
    },
  },
  watch: {
    cartProducts() {
      let cartQty = 0;
      this.cartProducts.carts.forEach((ele) => {
        cartQty += ele.qty;
      });
      this.$bus.$emit('getmitt', cartQty);
    },
  },
  created() {
    this.getProduct();
    this.getCart();
  },
};
</script>
