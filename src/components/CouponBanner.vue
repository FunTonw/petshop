<template>
<div class="container-0">
  <div class="
  CouponBanner
  d-flex
  flex-column
  align-items-start align-items-lg-center
  justify-content-center
  py-2 py-md-5
  mb-5">
    <div class="cake1 move"></div>
    <div class="cake2"></div>
      <div class="coupon_text">
      <p>輸入優惠碼即可獲得</p>
      <p>滿$200 折 $50</p>
    </div>
    <span class="
    fs-4 fs-md-6
    bg-white
    text-black
    rounded-pill
    px-4
    py-1
    mb-2
    fw-bold">cakeking</span>
    <button class="btn btn-danger">馬上使用</button>
  </div>
</div>
</template>

<style>
  .CouponBanner {
    padding: 20px;
    width: 100%;
    height: 100%;
    position: relative;
    background-color:rgba(255, 107, 107, 0.8);
  }
  .cake1 {
      display: block;
      position: absolute;
      background: url('../assets/img/banner/couponBanner1.png') center no-repeat;
      background-size: 100%;
      color: blue;
      width: 30%;
      height: 100%;
      top: 0;
      right: 10px;
  }
  .move:hover {
    animation-duration: .3s;
    animation-iteration-count: 1.5;
    animation-name: moving;
    animation-timing-function: ease-out;
  }
  @keyframes moving {
  0%   { transform: rotate(0turn); }
  25%  { transform: rotate(0.01turn); }
  75%  { transform: rotate(-0.01turn); }
  100% { transform: rotate(0turn);  }
  }
  .cake2 {
    background: url('../assets/img/banner/couponBanner2.png') -70px center no-repeat;
    background-size: 100%;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
  .coupon_text {
    font-size: 50px;
    font-weight: 600;
    line-height: 1;
    color: #fff;
    text-shadow:  .1em .1em #666699;
  }
  .couponCode {
      background-color: #fff;
      display: inline;
  }
@media screen and (max-width: 835px){
  .cake1{
    background-size: 120%;
    width: 40%;
  }
  .cake2 {
    width: 60%;
  }
  .text {
    font-size: 30px;
  }
 }
@media screen and (max-width: 429px){
  .cake1{
    background-size: 100%;
    width: 50%;
  }
 .cake2 {
   width: 80%;
 }
 .text {
  font-size: 20px;
 }
}
</style>
