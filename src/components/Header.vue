<template>
  <div class="header">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center p-2 ">
        <ul class="d-flex
         flex-column flex-lg-row
         m-0
         content-list">
          <li class="me-3">
            <a href="tel:+078005544"><i class="bi bi-telephone-fill"></i> 07-8005544</a>
          </li>
          <li>
            <a href="mailto:heHa@yahoo.com"><i class="bi bi-envelope"></i> CakeKing@CK.com</a>
          </li>
        </ul>
        <ul class="d-flex m-0 content-list">
          <li><a href="#"><i class="bi bi-instagram"></i></a></li>
          <li class="ms-3"><a href="#"><i class="bi bi-twitter"></i></a></li>
          <li class="ms-3"><a href="#"><i class="bi bi-facebook"></i></a></li>
          <li class="ms-3"><a href="#"><i class="bi bi-linkedin"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
.header{
  background-color: #FF9999;
}
.content-list > li > a {
  color: #fff;
}
.content-list > li > a:hover{
  color: #666699;
}
</style>
<script>
export default {
  data() {
    return {
    };
  },
};
</script>
