<template>
    <div class="container">
        <div class="promo-item row row-cols-lg-4 row-cols-md-2 row-cols-1 p-3 mt-5 mb-5 g-2">
          <div
          class="
          d-flex
          flex-lg-column
          align-items-center">
          <div class="service-item">
              <i class="bi bi-coin"></i>
          </div>
              <div class="text-center service-text mx-auto">
                <p class="fw-bold">宅配到府，免運費</p>
                <p>單筆滿$200, 享免運優惠</p>
              </div>
          </div>
          <div class="
          d-flex
          flex-lg-column
          align-items-center">
          <div class="service-item">
              <i class="bi bi-search"></i>
          </div>
              <div class="text-center service-text mx-auto">
                <p class="fw-bold">七天鑑賞期</p>
                <p>長達七天的鑑賞時間</p>
              </div>
          </div>
          <div class="
          d-flex
          flex-lg-column
          align-items-center">
          <div class="service-item">
              <i class="bi bi-people-fill"></i>
          </div>
              <div class="text-center service-text mx-auto">
                <p class="fw-bold">24小時客服</p>
                <p>最有品質的售後服務</p>
              </div>
          </div>
          <div class="
          d-flex
          flex-lg-column
          align-items-center">
          <div class="service-item">
              <i class="bi bi-bag-heart-fill"></i>
          </div>
              <div class="text-center service-text mx-auto">
                <p class="fw-bold">最優惠的商品</p>
                <p>天天折扣，只有更便宜</p>
              </div>
          </div>
        </div>
    </div>
</template>
<style>
  .service-item > i {
    color: #FF9999;
    font-size: 56px;
    padding: 14px;
  }
  .service-item{
    position: relative;
    z-index: 10;
  }
  .service-item::after{
    content: "";
    display: block;
    background-color: #666699;
    width: 85px;
    height: 85px;
    position: absolute;
    border-radius: 50%;
    top: 0;
    z-index: -1;
  }
  .service-text{
    padding-top: 15px;
    font-size: 15px;
    line-height: .7;
  }
  .promo-item{
    border: 1px solid #FF9999;
    border-radius: 10px;
  }
</style>
