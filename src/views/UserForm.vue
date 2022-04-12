<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 col-12">
        <h4>訂單資料</h4>
        <Form v-slot="{ errors }" @submit="createOrder">
          <div class="mb-3">
            <label for="email" class="form-label text-secondary fw-bold">信箱</label>
            <Field id="email" name="信箱" type="email"
             class="form-control" :class="{ 'is-invalid': errors['信箱'] }"
             placeholder="請輸入信箱" rules="email|required" v-model="form.user.email"></Field>
            <error-message name="信箱" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label text-secondary fw-bold">收件人姓名</label>
            <Field id="name" name="姓名" type="text"
             class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
             placeholder="請輸入姓名" rules="required" v-model="form.user.name"></Field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label text-secondary fw-bold">收件人電話</label>
            <Field id="tel" name="電話" type="tel"
             class="form-control" :class="{ 'is-invalid': errors['電話'] }"
             placeholder="請輸入電話" rules="required" v-model="form.user.tel"></Field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label text-secondary fw-bold">收件人地址</label>
            <Field id="address" name="地址" type="text"
             class="form-control" :class="{ 'is-invalid': errors['地址'] }"
             placeholder="請輸入地址" rules="required" v-model="form.user.address"></Field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
              <label for="payMethod" class="form-label text-secondary fw-bold">付款方式</label>
              <Field name="付款方式" as="select" id="payMethod"
               class="form-select" :class="{ 'is-invalid': errors['付款方式'] }"
               rules="required" v-model="form.user.payMethod">
                <option selected disabled value="">選擇付款方式</option>
                <option value="超商取貨" >超商取貨</option>
                <option value="信用卡">信用卡/Visa</option>
                <option value="ATM轉帳">ATM轉帳</option>
              </Field>
              <error-message name="付款方式" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
              <label for="message" class="form-label text-secondary fw-bold">留言</label>
            <Field name="留言" as="textarea" id="message"
             class="form-control"  v-model="form.message"
             style="height: 200px;">
            </Field>
          </div>
          <router-link class="btn btn-outline-secondary" to="/user/buy">回購物車</router-link>
          <button class="btn btn-danger ms-3" type="submit">送出結帳</button>
        </Form>
      </div>
      <div class="col-md-6 col-12">
         <h4>購物清單</h4>
        <table class="table table-striped table-light text-center">
          <tbody>
            <tr style="vertical-align: middle ;" v-for="item in carts" :key="item.id">
              <td style="width: 120px;">
                <img :src="item.product.imageUrl" alt="" class="w-100">
              </td>
              <td class="text-start">
                <p class="m-0 fw-bold">{{ item.product.title }}</p>
                <p class="m-0">數量: {{ item.qty }}</p>
              </td>
              <td>${{ $filters.currency(item.total) }}</td>
            </tr>
          </tbody>
        </table>
        <p class="text-end fs-5 fw-bold">總金額：${{ $filters.currency(originTotal) }}</p>
        <p class="text-end fs-5 fw-bold text-danger">折扣價：${{ $filters.currency(total) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
      total: 0,
      originTotal: 0,
      form: {
        user: {},
        message: '',
      },
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
        });
    },
    createOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(api, { data: order })
        .then((res) => {
          console.log(res);
          this.getCarts();
        });
    },
  },
  created() {
    this.getCarts();
  },
};
</script>
