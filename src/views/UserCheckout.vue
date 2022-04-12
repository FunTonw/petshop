<template>
  <div class="container w-50">
    <!-- 購物車內容 -->
    <table class="table text-left">
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
    </table>
    <!-- 訂單資料 -->
    <table class="table">
      <tbody>
        <tr>
          <th>Email:</th>
          <th>{{ user['email'] }}</th>
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
          <td>尚未付款</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

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
          this.order = res.data.order;
          this.user = res.data.order.user;
          console.log(this.order.user);
        });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
