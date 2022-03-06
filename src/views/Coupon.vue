<template>
<CouponModel
 ref="couponModel"
 @emitCoupon="addCoupon"
 :coupon="couponsItem"
 />
<button class="btn btn-danger" @click.prevent="openModal(true)">新增優惠卷</button>
<table class="table mt-4">
  <thead>
    <tr>
      <th width="120">分類</th>
      <th>優惠卷名稱</th>
      <th width="120">折扣百分比</th>
      <th width="120">折扣代碼</th>
      <th width="100">是否啟用</th>
      <th width="200">編輯</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in coupons.coupons" :key="item.due_data">
      <td>{{ cangeTime(item.due_date) }}</td>
      <td>{{ item.title }}</td>
      <td class="text-right">
        {{ item.percent }}
      </td>
      <td class="text-right">
        {{ item.code }}
      </td>
      <td>
        <span class="text-success"
        v-if="item.is_enabled = 1">啟用</span>
        <span class="text-success"
        v-else>不啟用</span>
      </td>
      <td>
        <div class="btn-group">
          <button
          class="btn btn-outline-primary btn-sm"
          @click.prevent="openModal(false,item)"
          >編輯</button>
          <button class="btn btn-outline-danger btn-sm">刪除</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import CouponModel from '../components/couponModel.vue';

export default {
  inject: ['emitter'],
  data() {
    return {
      coupons: {},
      couponsItem: {},
      isNew: false,
    };
  },
  methods: {
    getCoupons() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`;
      this.$http.get(api)
        .then((res) => {
          this.coupons = res.data;
        });
    },
    openModal(isNew, item) {
      this.isNew = isNew;
      if (!this.isNew) {
        this.couponsItem = item;
        console.log(this.couponsItem);
      } else {
        this.couponsItem = {};
      }
      this.$refs.couponModel.showModal();
    },
    addCoupon(item) {
      this.$refs.couponModel.hideModal();
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let couponMethods = 'post';
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
        couponMethods = 'put';
      }
      // api
      this.$http[couponMethods](api, { data: this.couponsItem })
        .then((res) => {
          console.log(res.data);
          console.log(res.data.message);
          this.getCoupons();
        });
    },
    cangeTime(time) {
      const date = new Date(time);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
  },
  created() {
    this.getCoupons();
  },
  components: { CouponModel },
};
</script>
