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
              @click.prevent="delOrder(item)"
              >刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <PaginationVue
  :pages="pagination"
  @emit-pages="getOrder"/>
    <OrderModel
     ref="orderModel"
     :order="ordersItem"
     @emitOrder="updateOrder"/>
  </div>
   <DelModal
   ref="delModal"
   :product="ordersItem"
   @del-item="delOrder"/>
</template>

<script>
import OrderModel from '../components/OrderModel.vue';
import PaginationVue from '../components/Pagination.vue';
import DelModal from '../components/DelModal.vue';

export default {
  // inject 串接Toast(刪除/更新提示)
  inject: ['emitter'],
  components: {
    OrderModel,
    PaginationVue,
    DelModal,
  },
  data() {
    return {
      orders: [],
      ordersItem: {},
      pagination: {},
      isNew: false,
    };
  },
  methods: {
    getOrder(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.orders = res.data.orders;
            this.pagination = res.data.pagination;
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
          this.$refs.orderModel.hideModal();
          if (res.data.success) {
            this.getOrder();
            this.emitter.emit('push-message', {
              style: 'success',
              title: '更新成功',
            });
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '更新失敗',
              content: res.data.message.join('、'),
            });
          }
        });
    },
    delOrder(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      this.$http.delete(api)
        .then((res) => {
          this.$refs.delModal.hideModal();
          if (res.data.success) {
            console.log(res.data);
            this.emitter.emit('push-message', {
              style: 'success',
              title: '刪除成功',
            });
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '刪除失敗',
              content: res.data.message,
            });
          }
          this.getOrder();
        });
    },
  },
  created() {
    this.getOrder();
  },
};
</script>
