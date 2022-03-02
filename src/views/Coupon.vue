<template>
<CouponModel
 ref="couponModel"
 @emitCoupon="addCoupon"
 />
<button class="btn btn-danger" @click.prevent="openModal()">新增優惠卷</button>
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
        v-if="item.is_enabled = '1'">啟用</span>
        <span class="text-success"
        v-else>不啟用</span>
      </td>
      <td>
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-sm">編輯</button>
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
  data() {
    return {
      coupons: {},
      couponsItem: {},
    };
  },
  methods: {
    getCoupons() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`;
      this.$http.get(api)
        .then((res) => {
          this.coupons = res.data;
          console.log(this.coupons);
        });
    },
    openModal() {
      this.$refs.couponModel.showModal();
    },
    addCoupon(item) {
      this.couponsItem = { ...item };
      this.$refs.couponModel.hideModal();
      console.log(this.couponsItem);
      console.log('sendOK');
      // api
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      // const couponMethods = 'post';
      this.$http.post(api, { data: this.couponsItem })
        .then((res) => {
          console.log(res.data);
          this.getCoupons();
        });
    },
    cangeTime(time) {
      const date = new Date(time);
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    },
  },
  created() {
    this.getCoupons();
  },
  components: { CouponModel },
};
</script>
