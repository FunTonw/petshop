<template>
  <div class="container mb-5">
    <div class="row g-3">
      <div class="col-12 col-md-6">
        <div class="banner_item">
            <div class="inner">
              <a href="#">
                <img src="../assets/img/banner/banner_item1.jpg" alt="">
              </a>
            </div>
          <div class="
          banner_item_text
          text-white
          fw-bold
          fs-4 fs-sm-6
          fst-italic
          lh-1">
            <p>最划算的生日套餐</p>
            <p>限時優惠</p>
            <button class="btn btn-danger">立即下單</button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="banner_item">
          <div class="inner">
            <a href="#">
              <img src="../assets/img/banner/banner_item2.jpg" alt="">
            </a>
          </div>
          <div class="banner_item_text2 fw-bold fs-5 lh-1">
            <p class="
            fs-1
            banner_item_title">CakeKing</p>
            <p>屬於你們的假日</p>
            <p>假日優惠碼:
              <span class="
              rounded-pill
              bg-white
              text-danger
              px-3">CakeWeekend</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .banner_item{
    position: relative;
  }
  .inner > a::before{
    content: "";
    width: 100%;
    height: 100%;
    transform: translate(0%,-50%) scale(0.2, 0);
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    opacity: 0;
  }
  .inner > a:hover::before{
    transition: all .5s ease;
    opacity: 0.3;
    transform: translate(0%,0%) scale(1, 1);
  }
  @keyframes itemhover {
    0%{
      opacity: 0.3;
      transform: translate(0%,-50%);
    }
    50%{
      opacity: 1;
      transform: translate(25%) scale(0.5, 1);
    }
    100%{
      opacity: 0;
      transform: translate(50) scale(1, 1);
    }
  }
  .inner > a > img {
      max-width: 100%;
  }
  .banner_item > .banner_item_text{
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50%, 70%);
    text-shadow: 1px 1px #666699;
  }
  .banner_item > .banner_item_text2{
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50%,70%);
    color: #fff;
    text-shadow: 1px 1px #FF9999;
  }
  .banner_item_title{
    transform: rotate(-20deg) translate(-50px,-60px);
  }
  @media screen and (max-width: 991px) {
    .banner_item > .banner_item_text{
      transform: translate(20%, 30%);
    }
    .banner_item > .banner_item_text2{
      transform: translate(20%, 30%);
    }
    .banner_item_title{
      transform: rotate(-20deg) translate(-40px,-50px);
    }
  }
  @media screen and (max-width: 767px) {
    .banner_item > .banner_item_text2{
      transform: translate(30%, 50%);
    }
  }
</style>
