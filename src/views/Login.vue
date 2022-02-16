<template>
      <div class="loginbox border border-1 rounded rounded-4 py-3">
        <form @submit.prevent="signIn">
          <div class="d-flex flex-column align-items-center justify-content-center">
            <h4>會員登入</h4>
            <div class="mb-3">
              <label for="inputEmail" class="form-label">帳號</label>
              <input
              type="email"
              class="form-control p-1"
              id="inputEmail"
              placeholder="Email address"
              v-model="user.username"
              required
              autofocus>
              <div id="account" class="form-text">請輸入信箱</div>
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">密碼</label>
              <input
              type="password"
              class="form-control p-1"
              id="inputPassword"
              placeholder="Password"
              v-model="user.password"
              required>
            </div>
            <button type="submit" class="btn btn-primary px-2">登入</button>
          </div>

        </form>
      </div>
</template>

<style lang="scss">
    .loginbox {
        background-color: rgba($color: #6ae7fd, $alpha: 0.2);
        width: 400px;
        font-size: 16px;
        line-height: 1.2;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,50%)
    }
</style>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          console.log(token, expired);
          document.cookie = `hexToken=${token};
          expired=${new Date(expired)}`;
        });
    },
  },
};
</script>
