<template>
  <div class="foot p-5">
    <div class="container">
      <div class="
      row
      row-cols-lg-3 row-cols-12">
        <div class="foot-contact text-center text-lg-start">
          <p class="foot-title m-1">Contact
            <a href="#" @click.prevent="switchBtn('contact')">
              <i class="bi bi-caret-down-fill"  v-if="contactSwitch"></i>
              <i class="bi bi-caret-up-fill" v-else></i>
            </a>
          </p>
            <ul class="text-white p-0 listoff" v-if="contactSwitch">
              <li class="fw-bold"><i class="bi bi-geo-alt-fill me-1"></i>高雄市前鎮區中華二路吉林街20號</li>
              <li><i class="bi bi-telephone-fill me-1"></i>0912-312-123</li>
              <li><i class="bi bi-envelope-fill me-1"></i>CakeKing@CK.com</li>
            </ul>
        </div>
        <div class="foot-information text-center text-lg-start">
          <p class="foot-title m-1">Information
            <a href="#" @click.prevent="switchBtn('information')">
              <i class="bi bi-caret-down-fill"  v-if="informationSwitch"></i>
              <i class="bi bi-caret-up-fill" v-else></i>
            </a>
          </p>
          <ul class="p-0 listoff" v-if="informationSwitch">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Meun</a></li>
          </ul>
        </div>
        <div class="find-us text-center text-lg-start">
          <p class="foot-title m-1">Find Us</p>
          <ul class="
          text-white
          fs-3
          d-flex
          justify-content-center justify-content-lg-start
          p-0">
            <li class="me-2"><i class="bi bi-facebook"></i></li>
            <li class="me-2"><i class="bi bi-instagram"></i></li>
            <li class="me-2"><i class="bi bi-twitter"></i></li>
            <li class="me-2"><i class="bi bi-youtube"></i></li>
            <li><i class="bi bi-pinterest"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .foot{
    background-color: #FF9999;
  }
  .foot-title{
    color: #666996;
    font-weight: 600;
    font-size: 24px;
  }
  .foot-title > a{
    display: none;
    color: #666996;
  }
  .foot-information > ul > li > a{
    color:#fff;
  }
  .foot-information > ul > li > a:hover{
    color: #666996;
  }
  .find-us > ul > li:hover{
    color: #666996;
  }
  @media screen and (max-width: 835px) {
    .foot-title a{
      display: unset;
    }
  }
</style>

<script>
export default {
  data() {
    return {
      contactSwitch: true,
      informationSwitch: true,
    };
  },
  methods: {
    switchBtn(list) {
      if (list === 'contact') {
        this.contactSwitch = !this.contactSwitch;
      } else {
        this.informationSwitch = !this.informationSwitch;
      }
    },
  },
};
</script>
