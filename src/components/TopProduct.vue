<template>
  <div class="container mb-5">
      <h2>推薦商品</h2>
    <ul class="d-flex justify-content-center fs-5 category-list text-decoration-none p-0 mt-4">
      <li class="m-2">
        <a href="#" @click.prevent="changeCategory('All')">所有商品</a>
      </li>
      <li class="m-2">
        <a href="#" @click.prevent="changeCategory('蛋糕')">蛋糕</a>
      </li>
      <li class="m-2">
        <a href="#" @click.prevent="changeCategory('麵包')">麵包</a>
      </li>
      <li class="m-2">
        <a href="#" @click.prevent="changeCategory('派餅')">派餅</a>
      </li>
    </ul>
    <div>
      <ProductSlide/>
    </div>
  </div>
</template>

<style>
h2{
  color: #666699;
  display: inline;
  position: relative;
}
h2::before{
  content: "";
  position: absolute;
  width: 80%;
  height: 2px;
  background-color: #FF9999;
  bottom: -40%;
}
.category-list > li > a{
  color: #666699;
  font-weight: 500;
  position: relative;
}
.category-list > li > a::before{
  content: "";
  width: 0%;
  height: 3px;
  bottom: -15%;
  background-color: #FF9999;
  position: absolute;
}
.category-list > li > a:hover{
  color: #FF9999;
}
.category-list > li > a:hover::before{
  width: 100%;
  transition: all .3s ease-in-out;
}

.card{
   background-color:aliceblue;
 }
 .card > a{
   text-decoration: none;
   color: #000;
   position: relative;
 }
 .card-link::before{
   content: "";
   left: 0;
   height: 100%;
   width: 100%;
   background-color: rgba(255, 255, 255, 0.3);
   opacity: 0;
   position: absolute;
 }
 .card:hover .card-link::before{
   opacity: 1;
 }
 .card:hover .button-item{
   transform:translate(-50%,-50%);
   opacity: 1;
   transition: all 0.3s ease-out;
 }
 .button-item{
   position: absolute;
   top: 50%;
   left: 50%;
   transform:translate(-50%,-90%);
   opacity: 0;
 }
 .button-item button{
    background-color:#666699;
    color: #FFF;
 }
  .button-item button:hover{
   background-color:#FF9999;
   color: #666699;
 }
 @media screen and (max-width: 835px){
    .button-item{
      position: static;
      transform: none;
      opacity: 1;
    }
 }
 .cart-btn{
   background-color:#666699;
   color: #FFF;
 }
 .cart-btn:hover{
   background-color:#FF9999;
   color: #666699;
 }
</style>

<script>
import ProductSlide from './ProductSlide.vue';

export default {
  components: { ProductSlide },
};
</script>
