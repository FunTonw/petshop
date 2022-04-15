<template>
  <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="100">訂單編號</th>
          <th width="120">訂單日期</th>
          <th>收件人姓名</th>
          <th width="120">收件方法</th>
          <th width="120">收件人電話</th>
          <th width="100">是否付款</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.due_data">
          <td>{{ item.num }}</td>
          <td>{{ cangeTime(item.create_at) }}</td>
          <td>{{ item.user.name }}</td>
          <td class="text-right">
            {{ item.user.payment_method }}
          </td>
          <td class="text-right">
            {{ item.user.tel }}
          </td>
          <td>
            <span class="text-success"
            v-if="item.is_paid">付款完成</span>
            <span class="text-success"
            v-else>尚未付款</span>
          </td>
          <td>
            <div class="btn-group">
              <button
              class="btn btn-outline-primary btn-sm"
              @click.prevent=" openModal(isNew, item)"
              >編輯</button>
              <button
              class="btn btn-outline-danger btn-sm"
              >刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <OrderModel
     ref="orderModel"
     :order="ordersItem"
     @emitOrder="updateOrder"/>
  </div>
</template>

<script>
import OrderModel from '../components/OrderModel.vue';

export default {
  components: {
    OrderModel,
  },
  data() {
    return {
      orders: [],
      ordersItem: {},
      isNew: false,
    };
  },
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.orders = res.data.orders;
            console.log(res.data.orders);
          }
        });
    },
    cangeTime(time) {
      const date = new Date(time * 1000);
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    openModal(isNew, item) {
      this.isNew = isNew;
      if (!this.isNew) {
        this.ordersItem = item;
      } else {
        this.ordersItem = {};
      }
      this.$refs.orderModel.showModal();
    },
    updateOrder(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      this.$http.put(api, { data: item })
        .then((res) => {
          if (res.data.success) {
            this.$refs.orderModel.hideModal();
            this.getOrder();
          }
        });
    },
  },
  created() {
    this.getOrder();
  },
};
</script>
