<template>
  <div class="container mt-5">
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
                <span class="px-5">{{ item.qty }}</span>
                <button @click.prevent="cartsCount(item, 'add')"
                class="border-0 rounded-end fs-4 qty-button">
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </td>
            <td>${{ item.product.price }}</td>
            <td>${{ item.total }}</td>
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
        </div>
        <div class="col-md-6 col-12 fw-bold fs-5 text-end">
          <p>總金額 : ${{ originTotal }}</p>
          <p class="text-danger">折扣價 : ${{ total }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
      originTotal: 0,
      total: 0,
      coupon_code: '',
    };
  },
  methods: {
    getCarts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api)
        .then((res) => {
          this.carts = res.data.data.carts;
          this.originTotal = res.data.data.total;
          this.total = res.data.data.final_total;
          console.log(res.data.data);
        });
    },
    cartsCount(item, use) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      let cartQty = item.qty;
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
          console.log(res.data);
          this.getCarts();
        });
    },
    delCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.$http.delete(api)
        .then((res) => {
          console.log(res);
          this.getCarts();
        });
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(api, { data: coupon })
        .then(() => {
          this.getCarts();
        });
    },
  },
  created() {
    this.getCarts();
  },
};
</script>
