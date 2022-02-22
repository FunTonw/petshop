<template>
<Loading :active="isLoading"></Loading>
<button class="text-end btn btn-primary"
 type="button"
 @click.prevent="openModal(true)">新增產品
</button>
<table class="table mt-4">
  <thead>
    <tr>
      <th width="120">分類</th>
      <th>產品名稱</th>
      <th width="120">原價</th>
      <th width="120">售價</th>
      <th width="100">是否啟用</th>
      <th width="200">編輯</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for=" item in products" :key="item.id">
      <td>{{ item.category }}</td>
      <td>{{ item.title }}</td>
      <td class="text-right">
        {{ item.origin_price }}
      </td>
      <td class="text-right">
        {{ item.price }}
      </td>
      <td>
        <span class="text-success" v-if="item.is_enabled">啟用</span>
        <span class="text-muted" v-else>未啟用</span>
      </td>
      <td>
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-sm"
          @click='openModal(false, item)'>編輯</button>
          <button class="btn btn-outline-danger btn-sm"
          @click="openDelModal(item)">刪除</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<ProductsModal
 ref="productsModal"
 :product="tempProduct"
 @update-product="updateProduct"></ProductsModal>
 <DelModal
 ref="delModal"
 :product="tempProduct"
 @del-item="delItem"/>
</template>

<script>
import ProductsModal from '../components/ProductsModal.vue';
import DelModal from '../components/DelModal.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    ProductsModal,
    DelModal,
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          }
        });
    },
    openModal(isNew, item) {
      this.isNew = isNew;
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.$refs.productsModal.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      console.log('post');
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
        console.log('put');
      }
      const productComponent = this.$refs.productsModal;
      this.isLoading = true;
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then(() => {
          this.isLoading = false;
          productComponent.hideModal();
          this.getProducts();
        });
    },
    openDelModal(item) {
      this.tempProduct = { ...item };
      this.$refs.delModal.showModal();
    },
    delItem() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http.delete(api)
        .then((res) => {
          console.log(res.data);
          this.$refs.delModal.hideModal();
          this.getProducts();
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
