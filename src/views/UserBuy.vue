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
  <div class="container mt-5" v-if="carts.length > 0">
    <h2>購物車</h2>
    <div class="mt-5">
      <table class="col-12 table table-striped table-light text-center">
        <thead class="fw-bold">
          <tr>
            <td>名稱</td>
            <td class="d-none d-lg-table-cell">數量</td>
            <td>單價</td>
            <td>金額</td>
            <td>刪除</td>
          </tr>
        </thead>
        <tbody>
          <tr style="vertical-align: middle ;" v-for="item in carts" :key="item.id">
            <td class="fw-bold">
              {{ item.product.title }}
              <div class="input-qty border border-1 rounded p-0 d-lg-none
              d-flex align-items-center justify-content-between col-md-6 col-12">
                <button @click.prevent="cartsCount(item, 'dash')"
                class="border-0 rounded-start fs-4 qty-button" v-if="item.qty > 1">
                  <i class="bi bi-dash"></i>
                </button>
                <button class="border-0 rounded-start fs-4 qty-button-disabled" v-else disabled>
                  <i class="bi bi-dash"></i>
                </button>
                <span class="px-5">{{ item.qty }}</span>
                <button @click.prevent="cartsCount(item, 'add')"
                class="border-0 rounded-end fs-4 qty-button">
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </td>
            <td class="d-none d-lg-table-cell">
              <div class="input-qty border border-1 rounded p-0  mx-auto
              d-flex align-items-center justify-content-between col-md-6 col-12">
                <button @click.prevent="cartsCount(item, 'dash')"
                class="border-0 rounded-start fs-4 qty-button" v-if="item.qty > 1">
                  <i class="bi bi-dash"></i>
                </button>
                <button class="border-0 rounded-start fs-4 qty-button-disabled" v-else disabled>
                  <i class="bi bi-dash"></i>
                </button>
                <span class="px-5">
                <div
                class="spinner-border text-danger spinner-border-sm "
                role="status"
                v-if="this.status.loadingItem === item.id">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <span v-else> {{ item.qty }}</span>
                </span>
                <button @click.prevent="cartsCount(item, 'add')"
                class="border-0 rounded-end fs-4 qty-button">
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </td>
            <td>${{ $filters.currency(item.product.price) }}</td>
            <td>${{ $filters.currency(item.total) }}</td>
            <td>
              <button class="btn btn-outline-danger btn-sm" @click.prevent="delCart(item)">
                <i class="bi bi-x"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col-md-6 col-12 mb-3 mb-md-0">
        <div class="input-group d-flex">
          <button
          class="btn btn-secondary"
          type="button"
          @click="addCouponCode"
          >使用優惠卷</button>
          <input
          class="form-control form-control-sm p-1 px-2"
          type="text"
          v-model="coupon_code"
          placeholder="請輸入優惠卷碼">
        </div>
        <div class="form-text">開幕歡慶優惠碼：ilovecake</div>
        </div>
        <div class="col-md-6 col-12 fw-bold fs-5 text-end">
          <p>總金額 : ${{ $filters.currency(originTotal) }}</p>
          <p class="text-danger">折扣價 : ${{ $filters.currency(total) }}</p>
        </div>
        <div class="d-flex justify-content-end">
          <router-link class="btn btn-outline-secondary me-3" to="/user/cart">繼續選購</router-link>
          <router-link class="btn btn-danger" to="/user/form">前往結帳</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="container" v-else>
    <div class="
    d-flex flex-column
    justify-content-center
    align-items-center
    fs-3 fw-bolder
    text-secondary
    mt-5 vh-100">
      <p class="fw-bolder">很抱歉，您的購物車還沒有商品</p>
      <p>趕緊將喜愛商品加入購物車吧</p>
      <router-link to="/user/cart" class="btn btn-danger fs-3">回商品頁</router-link>
      <p class="icon-hand"><i class="bi bi-hand-index"></i></p>
    </div>
  </div>
</template>

<style>
  .icon-hand{
    animation-duration: 0.2s;
    animation-name: handmove;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes handmove {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(20%);
    }
  }
</style>

<script>

export default {
  data() {
    return {
      carts: [],
      originTotal: 0,
      total: 0,
      coupon_code: '',
      status: {
        loadingItem: '',
      },
      isGetLoading: false,
      isLoading: false,
      isLoadingMassege: '',
    };
  },
  methods: {
    getCarts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isGetLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isGetLoading = false;
          this.carts = res.data.data.carts;
          this.originTotal = res.data.data.total;
          this.total = res.data.data.final_total;
        });
    },
    cartsCount(item, use) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      let cartQty = item.qty;
      this.status.loadingItem = item.id;
      if (use === 'add') {
        cartQty += 1;
      } else {
        cartQty -= 1;
      }
      const cartData = {
        product_id: item.id,
        qty: cartQty,
      };
      this.$http.put(api, { data: cartData })
        .then((res) => {
          if (res.data.success) {
            this.status.loadingItem = '';
            this.getCarts();
          }
        });
    },
    delCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.$http.delete(api)
        .then((res) => {
          this.isLoading = true;
          this.isLoadingMassege = res.data.message;
          this.getCarts();
        });
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(api, { data: coupon })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = true;
            this.isLoadingMassege = res.data.message;
            this.getCarts();
          }
        });
    },
  },
  watch: {
    isLoading() {
      setTimeout(() => { this.isLoading = false; }, 1500);
    },
  },
  created() {
    this.getCarts();
  },
};
</script>
