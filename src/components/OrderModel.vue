<template>
<div>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title">編輯訂單</h5>
         <button type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"></button>
       </div>
       <div class="modal-body">
        <div class="row">
          <div class="mb-3 col-6">
            <label for="title" class="form-label">收件人姓名</label>
            <input type="text" class="form-control" id="title"
                v-model="orderItem.user.name"
                placeholder="請輸入姓名">
          </div>
            <div class="mb-3 col-6">
              <label for="email" class="form-label">收件人信箱</label>
              <input type="text" class="form-control" id="email"
                v-model="orderItem.user.email"
                placeholder="請輸入信箱">
            </div>
            <div class="mb-3 col-6">
              <label for="tel" class="form-label">收件人電話</label>
              <input type="text" class="form-control" id="tel"
                v-model="orderItem.user.tel"
                placeholder="請輸入電話">
            </div>
            <div class="mb-3 col-6">
              <label for="payment_method" class="form-label">付款方式</label>
              <!-- <input type="text" class="form-control" id="payment_method"
                v-model="orderItem.user.payment_method"
                placeholder="付款方式"> -->
              <select class="form-select" id="payment_method"
              v-model="orderItem.user.payment_method">
                  <!-- <option selected :value="orderItem.user.payment_method"></option> -->
                  <option v-for="method in payMethods" :key="method"
                  :value="method">{{ method }}</option>
              </select>
            </div>
            <div class="mb-3 col-12">
              <label for="address" class="form-label">收件人地址</label>
              <input type="text" class="form-control" id="address"
                v-model="orderItem.user.address"
                placeholder="請輸入地址">
            </div>
            <p>商品項目</p>
            <div class="mb-3" style="height: 150px; overflow: auto;">
              <table class="table">
                <thead>
                  <tr>
                    <th>商品名稱</th>
                    <th>商品數量</th>
                    <th>商品價格</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for=" item in orderItem.products " :key="item">
                    <th>{{ item.product.title }}</th>
                    <th>{{ item.qty }}</th>
                    <th>${{ $filters.currency(item.final_total) }}</th>
                  </tr>
                </tbody>
              </table>
            </div>
              <p class="fw-bold">總金額 : ${{ $filters.currency(orderItem.total) }}</p>
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
                      v-model="orderItem.is_paid"
                      id="is_paid">
              <label class="form-check-label" for="is_paid">
                是否付款
              </label>
            </div>
          </div>
        </div>
       </div>
       <div class="modal-footer">
         <button
         type="button"
         class="btn btn-primary"
         data-bs-dismiss="modal"
         @click="hideModal();"
         >取消</button>
         <button
          type="button"
          class="btn btn-danger"
         @click.prevent="getOrder()">確認</button>
       </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import modalMixin from '@/mixin/ModalMixin';

export default {
  data() {
    return {
      orderItem: {
        user: {},
      },
      payMethods: [
        'ATM轉帳',
        '信用卡',
        '超商取貨',
      ],
    };
  },
  mixins: [modalMixin],
  methods: {
    getOrder() {
      this.$emit('emitOrder', this.orderItem);
    },
  },
  props: {
    order: {
      type: Object,
    },
  },
  watch: {
    order() {
      this.orderItem = this.order;
    },
  },
};
</script>
