<template>
  <div class="container width-rwd mt-5">
    <form @submit="payOder()">
    <!-- 訂單資料 -->
    <h3 class="text-center text-secondary fw-bold mt-5">訂單資料</h3>
    <table class="table table-light">
      <tbody>
        <tr>
          <th>Email:</th>
          <td>{{ user.email }}</td>
        </tr>
        <tr>
          <th>收件人姓名</th>
          <td>{{ user.name }}</td>
        </tr>
        <tr>
          <th>收件人電話</th>
          <td>{{ user.tel }}</td>
        </tr>
        <tr>
          <th>收件人地址</th>
          <td>{{ user.address }}</td>
        </tr>
        <tr>
          <th>付款狀態</th>
          <td class="text-danger" v-if="order.is_paid">付款完成</td>
          <td v-else>尚未付款</td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-end">
      <button class="btn btn-danger" type="submit">完成付款</button>
    </div>
    </form>
    <!-- 購物車內容 -->
    <h3 class="text-center text-secondary fw-bold">訂單產品</h3>
    <table class="table text-left table-light">
      <thead>
        <tr class="fw-bold" style="vertical-align: middle;">
          <td>產品名稱</td>
          <td>價格</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in order.products" :key="item.id" style="vertical-align: middle;">
          <td>
            <p class="m-0">{{ item.product.title }}</p>
            <p class="m-0">數量 : {{ item.qty }}</p>
          </td>
          <td>
            ${{ $filters.currency(item.total) }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>總計 :</th>
          <td class="fw-bold">$ {{ $filters.currency(order.total) }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style >
  .width-rwd {
    max-width: 50%;
  }
  @media screen and (max-width: 768px) {
    .width-rwd {
      max-width: 100%;
    }
  }
</style>

<script>
export default {
  data() {
    return {
      order: {},
      user: {},
      orderId: '',
    };
  },
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
            this.user = res.data.order.user;
            console.log(this.order);
          }
        });
    },
    payOder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            this.getOrder();
          }
        });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
