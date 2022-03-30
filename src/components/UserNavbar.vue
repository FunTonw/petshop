<template>
  <nav class="
  nav-text
  shadow-sm
  p-md-4 p-0
  bg-light">
    <div class="container-fluid">
      <div class="d-flex align-items-center justify-content-around w-100">
        <a href="#" class="navbar-brand"><img src="../assets/img/logo.png" alt=""></a>
          <ul class="
          d-flex
          flex-md-row flex-column
          mx-auto
          p-0
          nav-list
          user-nav-list
          bg-light
          under-line"
          ref="navList">
            <li class="px-auto">
              <a class="py-1 me-lg-4 me-0 text-center d-block" aria-current="page" href="#">Home</a>
            </li>
            <li class="py-1 me-lg-4 me-0 text-center d-block">
              <a href="#">About Us</a>
            </li>
            <li class="py-1 me-lg-4 me-0 text-center d-block">
              <a href="#">Product</a>
            </li>
            <li class="py-1 me-lg-4 me-0 text-center d-block ">
              <a href="#">Shop</a>
            </li>
          </ul>
        <ul class="d-flex nav-list m-0">
          <li><a href="#"><i class="bi bi-cart4 fs-4 me-3"></i></a></li>
          <li><a href="#"><i class="bi bi-person-circle fs-4 me-3"></i></a></li>
          <li>
            <a href="#" class="nav-ham" @click.prevent="listActive()">
              <i class="bi bi-list fs-4"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style>
  .nav-list > li > a{
    color: rgba(65, 65, 65, 0.7);
    font-weight: 600;
    position: relative;
  }
  .nav-list > li > a:hover{
    color: rgb(27, 27, 27);
  }
  .under-line > li > a::before{
    content: '';
    position: absolute;
    border-bottom: 4px solid #FF9999;
    bottom: -4px;
    left: 0;
    width: 0%;
    transition: .3s ease-in-out;
  }
  .under-line > li > a:hover::before{
    width: 100%;
  }
  .nav-ham{
    display: none;
  }
  @media screen and (max-width: 429px) {
    .nav-ham{
      display: block;
    }
    .nav{
      position: relative;
    }
    .user-nav-list{
      position: absolute;
      width: 100%;
      background: #fff;
      transform: translate(100%, 80%);
      display: block;
      opacity: 1;
      z-index: 1;
      transition: all .2s linear;
    }
    /* .user-nav-list > li{
      height: 0;
    } */
    .list-active {
      /* transition: all .5 linear;
      height: 100% !important */
      transition: all .2s linear;
      transform: translate(0%, 80%);
      opacity: 1;
    }
   }
</style>

<script>
export default {
  data() {
    return {
      listActiveSwitch: true,
    };
  },
  methods: {
    listActive() {
      this.listActiveSwitch = !this.listActiveSwitch;
      if (!this.listActiveSwitch) {
        this.$refs.navList.classList.add('list-active');
      } else {
        this.$refs.navList.classList.remove('list-active');
      }
    },
  },
};
</script>
