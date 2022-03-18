<template>
  <nav class="navbar navbar-expand-lg nav-text shadow-sm p-4">
    <div class="container-fluid">
      <div class="d-flex align-items-center justify-content-around w-100">
        <a href="#" class="navbar-brand"><img src="../assets/img/logo.png" alt=""></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 nav-list under-line">
            <li class="nav-item">
              <a class="me-4" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item me-4">
              <a href="#">About Us</a>
            </li>
            <li class="nav-item me-4">
              <a href="#">Product</a>
            </li>
            <li class="nav-item me-4">
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>
        <ul class="d-flex nav-list">
          <li><a href="#"><i class="bi bi-cart4 fs-4 me-3"></i></a></li>
          <li><a href="#"><i class="bi bi-person-circle fs-4"></i></a></li>
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
</style>
