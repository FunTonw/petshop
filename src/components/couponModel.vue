<template>
<div>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title">新增優惠卷</h5>
         <button type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"></button>
       </div>
       <div class="modal-body">
        <div>
          <div class="mb-3">
            <label for="title" class="form-label">優惠卷名稱</label>
            <input type="text" class="form-control" id="title"
                v-model="couponItem.title"
                placeholder="請輸入名稱">
          </div>
            <div class="mb-3">
              <label for="price" class="form-label">優惠卷折扣(百分比)</label>
              <input type="number" class="form-control" id="unit"
                v-model="couponItem.percent"
                placeholder="請輸入折扣">
            </div>
            <div class="mb-3">
              <label for="origin_price" class="form-label">使用期限</label>
              <input type="date" class="form-control" id="origin_price"
                v-model="changTime"
                placeholder="請輸入日期">
            </div>
            <div class="mb-3">
              <label for="price" class="form-label">優惠卷代碼</label>
              <input type="text" class="form-control" id="price"
                v-model="couponItem.code"
                placeholder="請輸入代碼名稱">
            </div>

          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      v-model.number="couponItem.is_enabled"
                      id="is_enabled">
              <label class="form-check-label" for="is_enabled">
                是否啟用
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
         @click.prevent="getCoupon()">確認</button>
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
      // changTime: '',
      couponItem: {},
    };
  },
  mixins: [modalMixin],
  methods: {
    getCoupon() {
      this.$emit('emitCoupon', this.couponItem);
    },
  },
  props: {
    coupon: {
      type: Object,
      default() { return {}; },
    },
  },
  computed: {
    changTime: {
      get() {
        if (!this.couponItem.due_date) {
          return '0000-00-00';
        }
        return new Date(this.couponItem.due_date).toISOString().slice(0, 10);
      },
      set(val) {
        console.log(val);
        this.couponItem.due_date = new Date(val).getTime();
      },
    },
  },
  watch: {
    coupon() {
      this.couponItem = this.coupon;
    },
  },
};
</script>
