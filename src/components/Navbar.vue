<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar w/ text</a>
    <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarText"
    aria-controls="navbarText"
    aria-expanded="false"
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link
          to="/deshboard/products"
          class="nav-link active"
          aria-current="page"
          href="#">產品</router-link>
        </li>
        <li class="nav-item">
          <router-link
          class="nav-link"
          href="#"
          to="/deshboard/coupon">優惠卷</router-link>
        </li>
        <li class="nav-item">
          <router-link
          class="nav-link"
          href="#"
          to="/deshboard/order">訂單</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logout">登出</a>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token};
            expired=${new Date(expired)}`;
            this.$router.push('/login');
          }
        });
    },
  },
};
</script>
