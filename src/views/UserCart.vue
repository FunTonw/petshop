<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
  <div class="container-fluid">
    <div class="collapse navbar-collapse align-items-center justify-content-center" id="navbarNav">
      <ul class="navbar-nav my-3">
        <li class="nav-item mx-4">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <div class="container">
      <div class="row">
          <div class="col-3">
            <ul class="list">
              <li><a href="#" @click.prevent="productList('all')">查看 - 所有</a></li>
              <li><a href="#" @click.prevent="productList('寵物用具')">寵物 - 用品</a></li>
              <li><a href="#" @click.prevent="productList('寵物食品')">寵物 - 食品</a></li>
              <li><a href="#" @click.prevent="productList('寵物玩具')">寵物 - 玩具</a></li>
            </ul>
          </div>
          <div class="col-9">
              <div class="row">
                  <div class="col-4 mb-2"  v-for="item in listProducts" :key="item.id">
                    <a href="#" @click.prevent="goProduct(item.id)"
                    style="text-decoration:none; color:#000">
                      <div class="card">
                        <img src="" class="card-img-top madel" alt="">
                        <div class="card-body p-3">
                          <b class="card-title">{{ item.title }}</b>
                          <div class="d-flex justify-content-between align-items-center">
                            <p class="origin-price fw-light mb-0">{{ item.origin_price }}</p>
                            <p class="price fw-bold mb-0">${{ item.price }}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<style>
  .origin-price {
      font-size: 14px;
      color: cadetblue;
      text-decoration: line-through;
  }
  .list > li  {
    list-style: none;
    margin: 18px;
  }
  .list > li > a{
    padding: 10px;
    font-size: 18px;
    text-decoration: none;
    color: rgb(153, 153, 153);
  }
  .list > li > a:hover{
    color: black;
  }
</style>

<script>
export default {
  data() {
    return {
      products: [],
      pagination: {},
      listProducts: [],
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(api).then((res) => {
        this.products = res.data.products;
        this.listProducts = this.products;
      });
    },
    goProduct(id) {
      this.$router.push(`product/${id}`);
    },
    productList(category) {
      this.listProducts = (category === 'all' ? this.products : this.products.filter((x) => x.category === category));
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
